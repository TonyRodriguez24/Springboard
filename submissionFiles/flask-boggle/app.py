from boggle import Boggle
from flask import Flask, render_template, session, redirect, request, url_for, jsonify

boggle_game = Boggle()
app = Flask(__name__)

app.secret_key = '1234'

@app.route('/')
def home():
    if 'score' not in session:
        session['score'] = 0
    if 'guessed_words' not in session:
        session['guessed_words'] = []
    if 'board' not in session:
        session['board'] = boggle_game.make_board()
        

    
    return render_template('home.html', board = session['board'], score = session['score'], guessed_words = session['guessed_words'])

@app.route('/form', methods = ['POST'])
def form_submitted():
    guess = request.form.get('guess')
    response_message = boggle_game.check_valid_word(session['board'], guess)


    if guess in session['guessed_words']:
        return jsonify({'message': 'Already guessed!'})

    if response_message == 'ok' and guess not in session['guessed_words']:
        session['score'] += len(guess)
        session['guessed_words'].append(guess)

    

    return jsonify({
        'message' : response_message,
        'score': session['score'],
        'guessed_words': session['guessed_words']
    })

@app.route('/reset')
def reset_game():
    session.clear();
    session['score'] = 0
    session['guessed_words'] = []
    return redirect(url_for('home'))