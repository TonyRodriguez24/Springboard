const Person = (props) => {
    let str = '';
    let reply;

    if (props.age > 18) {
        reply = <h3>please go vote</h3>
    } else {
        reply = <h3>you must be 18</h3>
    }

    if (props.name.length > 8) {
        str = props.name.substring(0, 6)
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>{reply}</p>
            <p>{str}</p>
            <ul>{props.hobbies.map(t => (<li>{t}</li>))}</ul>
        </div>
    )
}