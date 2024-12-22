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
            db.session.query(Cupcake).delete()
            cupcake = Cupcake(**CUPCAKE_DATA)
            db.session.add(cupcake)
            db.session.commit()
            self.cupcake = cupcake

    def tearDown(self):
        with app.app_context():
            db.session.rollback()
            db.session.query(Cupcake).delete()
            db.session.commit()

    def test_list_cupcakes(self):
        with app.test_client() as client:
            with app.app_context():
                cupcake = Cupcake.query.first()  # Re-fetch cupcake

            resp = client.get("/api/cupcakes")
            self.assertEqual(resp.status_code, 200)

            data = resp.json
            self.assertEqual(data, {
                "cupcakes": [
                    {
                        "id": cupcake.id,
                        "flavor": cupcake.flavor,
                        "size": cupcake.size,
                        "rating": cupcake.rating,
                        "image": cupcake.image
                    }
                ]
            })

    def test_get_cupcake(self):
        with app.test_client() as client:
            with app.app_context():
                cupcake = Cupcake.query.first()  # Re-fetch cupcake

            url = f"/api/cupcakes/{cupcake.id}"
            resp = client.get(url)
            self.assertEqual(resp.status_code, 200)

            data = resp.json
            self.assertEqual(data, {
                "cupcake": {
                    "id": cupcake.id,
                    "flavor": cupcake.flavor,
                    "size": cupcake.size,
                    "rating": cupcake.rating,
                    "image": cupcake.image
                }
            })

    def test_create_cupcake(self):
        with app.test_client() as client:
            url = "/api/cupcakes"
            resp = client.post(url, json=CUPCAKE_DATA_2)

            self.assertEqual(resp.status_code, 201)

            data = resp.json
            self.assertIn('cupcake', data)

            self.assertIsInstance(data['cupcake']['id'], int)
            self.assertEqual(data['cupcake']['flavor'], "TestFlavor2")
            self.assertEqual(Cupcake.query.count(), 2)
