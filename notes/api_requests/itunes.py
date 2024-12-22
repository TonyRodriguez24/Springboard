import requests

term = "Madonna"
response = requests.get('https://itunes.apple.com/search', params = {'term': term, 'limit': 5})

data = response.json()
print(response.status_code)


# .text .status_code
# .json() converts response text to a python dictionary

for result in data['results']:
    print(result['trackName'])


# requests.post(url, data, json)
data = {'username':'chickens',
        'tweets': [
            'hello', 'goodbye', 'bock bock', {'id': 1, 'text':'my-first-tweet'}
        ]
}

requests.post('https://webhook-test.mautic.com/y4ktply4', json = data)

#json preferred