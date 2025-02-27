"""Message View tests."""
# run these tests like:
#
#    FLASK_ENV=production python -m unittest test_message_views.py


import os
from unittest import TestCase

from models import db, connect_db, Message, User

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///warbler_test"


# Now we can import app

from app import app, CURR_USER_KEY

# Create our tables (we do this here, so we only create the tables
# once for all tests --- in each test, we'll delete the data
# and create fresh new clean test data



# Don't have WTForms use CSRF at all, since it's a pain to test

app.config['WTF_CSRF_ENABLED'] = False


class MessageViewTestCase(TestCase):
    """Test views for messages."""

    @classmethod
    def setUpClass(cls):
        """Create test client, add sample data."""

        with app.app_context():
            db.drop_all()
            db.create_all()
    
    @classmethod
    def tearDownClass(cls):
            """drop database scheme after tests"""
            with app.app_context():
                db.drop_all()

    def setUp(self):
        self.client = app.test_client()

        with app.app_context():
               db.session.rollback()
               User.query.delete()
               Message.query.delete()

               self.testuser = User.signup(username="testuser", email="test@test.com", password="testuser", image_url=None)
               db.session.commit()

               user_in_database = User.query.filter_by(username='testuser').first()
               print(f'this should print anything but none {user_in_database}')
               assert user_in_database is not None


               #refresh testuser to bind to session
               db.session.refresh(self.testuser)

    def tearDown(self):
         with app.app_context():
              db.session.rollback()

    def test_add_message(self):
        """Can use add a message?"""

        # Since we need to change the session to mimic logging in,
        # we need to use the changing-session trick:
        with self.client as c:
            with c.session_transaction() as sess:
                with app.app_context():
                    sess[CURR_USER_KEY] = self.testuser.id
            
            # Now, that session setting is saved, so we can have the rest of ours test
            resp = c.post("/messages/new", data={"text": "this is a test message"})
            
            # Make sure it redirects
            self.assertEqual(resp.status_code, 302)

            with app.app_context():
                msg = Message.query.one()
                self.assertEqual(msg.user_id, self.testuser.id)
                self.assertEqual(msg.text, "this is a test message")
