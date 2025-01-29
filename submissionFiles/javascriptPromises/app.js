const button = document.querySelector('#btn')
let card = document.querySelector('#card')
let remaining = document.querySelector('#remaining');
let deck_id;
const url = ('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
axios.get(url)
    .then(res => {
        deck_id = res.data.deck_id;
})

.then(response => {
    console.log(`${response.data.cards[0].value} of ${response.data.cards[0].suit}`)
    return axios.get(url)
})
.then(response => {
    console.log(`${response.data.cards[0].value} of ${response.data.cards[0].suit}`)
})
.catch(error => {
    console.log(error)
})



button.addEventListener('click', () => {
    axios.get(url)
        .then(() => {
            return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        })
        .then(res => {
            console.log(res)
            card.setAttribute('src', res.data.cards[0].image);
            remaining.textContent = `Remaining = ${res.data.remaining}`
        })
})







// res.data.cards[0].img //gets src for image



