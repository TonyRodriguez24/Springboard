from re import sub
from app.database import db
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
from app.emails import send_email
import os
from app.info import SERVICES
from flask_login import UserMixin

# Load the .env file
load_dotenv()
SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")
MAIL_DEFAULT_SENDER = os.getenv("MAIL_DEFAULT_SENDER")

bcrypt = Bcrypt()

def get_column_names(cls):
        """Getting column names for admin dashboard"""
        return [column.name for column in cls.__table__.columns] # type: ignore

class Admin(UserMixin, db.Model):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    username = db.Column(db.String(50), unique = True, nullable = False)
    password = db.Column(db.String(300), nullable = False)
    is_admin = db.Column(db.Boolean, nullable = False, default = True) #True if admin

    @classmethod
    def create_admin(cls, username, password):
        """Creates admin with hashed pw"""
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        return cls(username = username, password = hashed_password, is_admin = True) # type: ignore
        
    def set_password(self, new_password):
        """Function for setting a new password"""
        if self.is_admin:
            self.password = bcrypt.generate_password_hash(new_password).decode('utf-8')
            return True
        return False
    
    @classmethod
    def authenticate_admin(cls, username, password):
        """Authenticating if type in password matches password in db"""
        admin = Admin.query.filter_by(username = username).first()
        if admin and bcrypt.check_password_hash(admin.password,  password):
            return admin
        else:
            return None
        


#in seed py
class Services(db.Model):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    name = db.Column(db.String(50), nullable = False, unique = True)

class Projects(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    type_of_work = db.Column(db.String(50), nullable = False)

    #foreign keys
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))

class Reviews(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    rating = db.Column(db.Integer, nullable = False)
    message = db.Column(db.Text(), nullable = True)

    #foreign key
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))

class Contact(db.Model):
    __tablename__ = 'contacts'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    phone = db.Column(db.String(30), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(100))
    service_type = db.Column(db.Integer, db.ForeignKey('services.id'))
    referral = db.Column(db.String(50))
    message = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=db.func.now())
    service = db.relationship('Services', backref='contacts')

    @classmethod
    def create_contact(cls, form, complete=False):
        """Creating a contact, ones that are complete can pass in 3 more fields, 
        then turn that into a new contact"""

        contact_info = {
            'name': form.name.data,
            'phone': form.phone.data,
            'email': form.email.data,
            'service_type': form.service_type.data
        }

        # Step 2: Add extra fields if it's the complete form
        if complete:
            contact_info['address'] = form.address.data
            contact_info['message'] = form.message.data
            contact_info['referral'] = form.referral.data

        # Step 3: Create and save the contact to the database
        try:
            new_contact = cls(**contact_info)
            db.session.add(new_contact)
            db.session.commit()

            print(f"Contact saved: {form.name.data}, {form.email.data}")

            # Step 4: Send the emails
            return cls.send_emails(form, complete)

        except Exception as e:
            print(f"Error creating contact: {e}")
            db.session.rollback()  # Rollback the database session if an error occurs
            return False

    @staticmethod
    def send_emails(form, complete):
        """Sending emails on form submission"""
        service_name = Contact.get_service_name(form.service_type.data)

    # Generate the email content for both business and customer
        content_to_business = Contact.generate_business_email(form, service_name, complete)
        content_to_customer = Contact.generate_customer_email(form, service_name, complete)

     # Send business email
        if not send_email(api_key=SENDGRID_API_KEY, from_email=MAIL_DEFAULT_SENDER, to_email="tonyrodriguez2497@gmail.com", subject=f"Form submission from {form.name.data}", content=content_to_business):
            print("Failed to send business email.")
            return False

     # Send confirmation email to the customer
        if not send_email(api_key=SENDGRID_API_KEY, from_email=MAIL_DEFAULT_SENDER, to_email=form.email.data, subject="Thank you for contacting JPM and Sons", content=content_to_customer):
            print("Failed to send confirmation email to customer.")
            return False

        print("Emails sent successfully.")
        return True


    @staticmethod
    def get_service_name(service_type):
        # Get service name from dictionary
        service_type_dict = dict(SERVICES)
        return service_type_dict.get(service_type, "Unknown Service Type")

    @staticmethod
    def generate_business_email(form, service_name, complete):
        """Function for generating businesss email template"""
        # Generate the content for the business email
        content = f"""
            <h3>Contact Form</h3>
            <p><strong>Name:</strong> {form.name.data}</p>
            <p><strong>Email:</strong> {form.email.data}</p>
            <p><strong>Phone:</strong> {form.phone.data}</p>
            <p><strong>Service Type:</strong> {service_name}</p>
        """

        if complete:
            content += f"""
                <p><strong>Address:</strong> {form.address.data}</p>
                <p><strong>Referral:</strong> {form.referral.data}</p>
            """

        content += f"<p><strong>Message:</strong> {form.message.data if form.message.data else 'No message provided'}</p>"
        print(f"Content to BUSINESS: {content}")

        return content

    @staticmethod
    def generate_customer_email(form, service_name, complete):
        """Function for generating customer email template"""

        content = f"""
            <p>Dear {form.name.data},</p>
            <p>Thank you for contacting us! We have received your message and will get back to you as soon as possible.</p>
            <p><strong>Summary of your submission:</strong></p>
            <p><strong>Service Type:</strong> {service_name}</p>
        """

        # Only include the message if it's provided (no need for "No message provided")
        if form.message.data:
            content += f"<p><strong>Message:</strong> {form.message.data}</p>"

        if complete:
            content += f"<p><strong>Address:</strong> {form.address.data}</p>"

        content += """
            <p>We look forward to assisting you with your needs.</p>
            <p>Best regards,<br/>JPM and Sons Team</p>
        """

        # Debugging content for checking
        print(f"Content to customer: {content}") 

        return content
