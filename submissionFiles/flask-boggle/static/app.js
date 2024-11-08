$(document).ready(function ()
{

        let timeRemaining = 60;  // Set timer duration in seconds
        const timerElement = $('#timer');

    const timer = setInterval(function () {
        timeRemaining--;

        timerElement.text(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(timer);  // Stop the timer when time runs out
            $('#guess-form button').prop('disabled', true);  // Disable the submit button
        }
        
    }, 1000)
    const form = $('#guess-form');
        
    form.on('submit', function (event) {
        event.preventDefault();

        const guess = $('#guess').val()

        $.ajax({
            type: 'POST',
            url: '/form',
            data: { guess: guess },
            success: function (response) {
                $('#response-message').text(response.message);
                $('#guess').val('');

                $('#score').text(response.score);
            }
       })
    })

    

})