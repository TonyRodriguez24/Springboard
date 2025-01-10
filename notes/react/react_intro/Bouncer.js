const Bouncer = (props) => {
    let reply;
    if (props.age < 18) {
        reply = 'sorry kid can not come in'
    } else if (props.age < 21){
        reply = 'you can come in but no drinking'
    }
    else {
        reply =
            <p>
                Come in you can drink
                <img src = 'randomimage'/>
            </p>
    }
    return (
        <div>
            <p>
                <b>Bouncer:</b>  How old are you? 
            </p>
            <p>
                <b>You:</b> I am {props.age} years old
            </p>
            <p>
                <b>Bouncer: {reply}</b>
            </p>
        </div>
    )
}