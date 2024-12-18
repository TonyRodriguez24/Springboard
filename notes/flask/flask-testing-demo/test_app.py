"""Sample test suite for testing demo."""
from app import app
from unittest import TestCase
from flask import session

app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

class ColorViewsTestCase(TestCase):
    #get request test
    def test_color_form(self):
        with app.test_client() as client:
            response = client.get('/')
            html = response.get_data(as_text = True)

            self.assertEqual(response.status_code, 200)
            self.assertIn('<h1>Color Form</h1>', html)

    #post request test
    def test_color_submit(self):
        with app.test_client() as client:
            res = client.post('/fav-color', data = {'color': 'orange'})
            html = res.get_data(as_text = True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('<h3>Woah! I like orange, too</h3>', html)


    #both these functions test redirects
    def test_redirection(self):
        with app.test_client() as client:
            res = client.get('/redirect-me')

            self.assertEqual(res.status_code, 302)
            self.assertEqual(res.location, '/')

    def test_redirection_followed(self):
        with app.test_client() as client:
            res = client.get('/redirect-me', follow_redirects = True)
            html = res.get_data(as_text = True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('<h1>Color Form</h1>', html)
            
    #count is showing up as 1
    def test_session_count(self):
        with app.test_client() as client:

            res = client.get('/')

            self.assertEqual(res.status_code, 200)
            self.assertEqual(session['count'],  1)

    #setting count equal to 999 and checking if session of next count is equal to 1000
    def test_session_count_set(self):
        with app.test_client() as client:
            with client.session_transaction() as change_session:
                change_session['count'] = 999

        res = client.get('/')

        self.assertEqual(res.status_code, 200)
        self.assertEqual(session['count'], 1000)

            # from unittest import TestCase
# from app import app
# from flask import session

# # Make Flask errors be real errors, not HTML pages with error info
# app.config['TESTING'] = True

# # This is a bit of hack, but don't use Flask DebugToolbar
# app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']


# class ColorViewsTestCase(TestCase):
#     """Examples of integration tests: testing Flask app."""

#     def test_color_form(self):
#         with app.test_client() as client:
#             # can now make requests to flask via `client`
#             resp = client.get('/')
#             html = resp.get_data(as_text=True)

#             self.assertEqual(resp.status_code, 200)
#             self.assertIn('<h1>Color Form</h1>', html)

#     def test_color_submit(self):
#         with app.test_client() as client:
#             resp = client.post('/fav-color',
#                                data={'color': 'blue'})
#             html = resp.get_data(as_text=True)

#             self.assertEqual(resp.status_code, 200)
#             self.assertIn('Woah! I like blue, too', html)

#     def test_redirection(self):
#         with app.test_client() as client:
#             resp = client.get("/redirect-me")

#             self.assertEqual(resp.status_code, 302)
#             self.assertEqual(resp.location, "http://localhost/")

#     def test_redirection_followed(self):
#         with app.test_client() as client:
#             resp = client.get("/redirect-me", follow_redirects=True)
#             html = resp.get_data(as_text=True)

#             self.assertEqual(resp.status_code, 200)
#             self.assertIn('<h1>Color Form</h1>', html)

#     def test_session_info(self):
#         with app.test_client() as client:
#             resp = client.get("/")

#             self.assertEqual(resp.status_code, 200)
#             self.assertEqual(session['count'], 1)

#     def test_session_info_set(self):
#         with app.test_client() as client:
#             # Any changes to session should go in here:
#             with client.session_transaction() as change_session:
#                 change_session['count'] = 999

#             # Now those changes will be in Flask's `session`
#             resp = client.get("/")

#             self.assertEqual(resp.status_code, 200)
#             self.assertEqual(session['count'], 1000)
