from flask import Flask, render_template, request
import requests
from config import API_KEY

API_BASE_URL = 'https://www.mapquestapi.com/geocoding/v1'

app = Flask(__name__)

def get_coordinates(address):
    response = requests.get(F"{API_BASE_URL}/address", params = {'key': API_KEY, 'location': address})
    
    data = response.json()
    lat = data["results"][0]["locations"][0]['latLng']['lat']
    lng = data["results"][0]["locations"][0]['latLng']['lng']
    coordinates = {'lat': lat, 'lng': lng}
    return coordinates


@app.route('/')
def show_address_form():
    return render_template('address_form.jinja')

@app.route('/geocode')
def get_location():
    address = request.args['address']
    coordinates = get_coordinates(address)

    return render_template('address_form.jinja', coordinates = coordinates)
