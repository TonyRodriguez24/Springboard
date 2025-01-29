"""User View tests."""
# run these tests like:
#
#    FLASK_ENV=production python -m unittest test_message_views.py

import os
from unittest import TestCase
from models import db, connect_db, Message, User
from app import app, CURR_USER_KEY

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///warbler_test"
app.config['WTF_CSRF_ENABLED'] = False

class TestUserViews(TestCase):

    def setUp(self):
        self.client = app.test_client()

        with app.app_context():
            db.drop_all()
            db.create_all()

            #create test user
            self.test_user = User.signup(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD",
            image_url=None
            )
            
            db.session.commit()

            #make sure its bound to session
            user_in_db = User.query.filter_by(username='testuser').first()
            assert user_in_db is not None, 'test user was not created'

    def test_message_views(self):
        with app.app_context():
            with self.client.session_transaction() as sess: #to use session
                sess[CURR_USER_KEY] = self.test_user.id
            
            response = self.client.post('/users/profile' , data = {'username' :'changed_my_username_24',
                                                                   'email': 'changedemail4@outlook.com',
                                                                   'password': 'HASHED_PASSWORD'}, follow_redirects=True)
            
            self.assertEqual(response.status_code, 200)
            updated_user = db.session.get(User, self.test_user.id)
            self.assertEqual(updated_user.username, 'changed_my_username_24')
            self.assertEqual(updated_user.email, 'changedemail4@outlook.com')
