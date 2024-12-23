from unittest import TestCase
from app import app
from models import db, Cupcake

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_test'
app.config['SQLALCHEMY_ECHO'] = False
app.config['TESTING'] = True

with app.app_context():
    db.drop_all()
    db.create_all()

CUPCAKE_DATA = {
    "flavor": "TestFlavor",
    "size": "TestSize",
    "rating": 5,
    "image": "http://test.com/cupcake.jpg"
}

CUPCAKE_DATA_2 = {
    "flavor": "TestFlavor2",
    "size": "TestSize2",
    "rating": 10,
    "image": "http://test.com/cupcake2.jpg"
}

class CupcakeViewsTestCase(TestCase):

    def setUp(self):
        with app.app_context():
            #clear existing data in the database
            Cupcake.query.delete()

            cupcake = Cupcake(**CUPCAKE_DATA)
            db.session.add(cupcake)
            db.session.commit()

            self.client = app.test_client()


    def tearDown(self):
        with app.app_context():
            db.session.rollback()
    
    def test_list_cupcakes(self):
        #checking get route of list
        response = self.client.get('/api/cupcakes')

        #check status code
        self.assertEqual(response.status_code, 200)

        #check the response data
        #checking if length of cupcakses is one and that cupcake flavor matches data in db
        data = response.json
        self.assertEqual(len(data['cupcakes']), 1)
        self.assertEqual(data['cupcakes'][0]['flavor'], CUPCAKE_DATA['flavor'])
    
    def test_get_cupcake(self):
        #checking getting cupcake by id
        cupcake = Cupcake.query.first()
        response = self.client.get(f'/api/cupcakes/{cupcake.id}')

        self.assertEqual(response.status_code, 200)
        data = response.json

        self.assertEqual(data['cupcake']['flavor'], CUPCAKE_DATA['flavor'])

    def test_add_cupcake(self):
        """test the adding of a single cupcake"""
        response = self.client.post('/api/cupcakes', json = {
            'flavor':'apple',
            'size': 'small',
            'rating': 6,
            'image': 'http://test.com/vanila.jpg'
        })

        self.assertEqual(response.status_code, 200)
        data = response.json

        self.assertEqual(data['cupcake']['flavor'], 'apple')
        self.assertEqual(data['cupcake']['size'], 'small')
        self.assertEqual(data['cupcake']['rating'], 6)
        self.assertEqual(data['cupcake']['image'], 'http://test.com/vanila.jpg')

    def test_updating_cupcake(self);
        """Test editing a cupcake's details"""
        cupcake = Cupcake.query.first()
        response = self.client.patch(f'/api/cupcakes/{cupcake.id}', json={
            'flavor': 'Chocolate',
            'rating': 9
        })

        self.assertEqual(response.status_code, 200)
        data = response.json
        self.assertEqual(data['cupcake']['flavor'], 'Chocolate')
        self.assertEqual(data['cupcake']['rating'], 9)

    def test_delete_cupcake(self):
        """Test deleting a cupcake by ID."""
        cupcake = Cupcake.query.first()  # Get a cupcake from setup
        response = self.client.delete(f"/api/cupcakes/{cupcake.id}")
        
        self.assertEqual(response.status_code, 200)
        data = response.json
        self.assertEqual(data['message'], "Cupcake successfully removed")
        self.assertIsNone(Cupcake.query.get(cupcake.id))  