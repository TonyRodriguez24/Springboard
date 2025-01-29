"""Test message model"""

import os
from app import app
from models import db, User, Message
from unittest import TestCase

os.environ['DATABASE_URL'] = "postgresql:///warbler_test"

class TestMessageModel(TestCase):

    def setUp(self):
        self.client = app.test_client()

        with app.app_context():
            db.drop_all()
            db.create_all()

            self.test_user = User.signup(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD",
            image_url=None
            )

            db.session.commit()

            self.test_user = User.query.filter_by(username="testuser").first()

    def tearDown(self):
        with app.app_context():
            db.session.rollback()
    
    def test_message_model(self):
        """Check if basic model works"""
        with app.app_context():
            test_message = Message(text = 'random message', user_id = self.test_user.id)
            db.session.add(test_message)
            db.session.commit()

            message = Message.query.get(test_message.id)

            #make assertions here
            self.assertEqual(message.text, 'random message')   
            self.assertEqual(message.user_id, self.test_user.id)   
