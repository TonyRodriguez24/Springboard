const Person = (props) => {
    const reply = props.age > 18
        ? <h3>please go vote</h3>
        : <h3>you must be 18</h3>;
    

    const str = props.name.length < 8
        ? props.name
        : props.name.substring(0, 6);

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>{reply}</p>
            <p>{str}</p>
            <ul>{props.hobbies.map(t => (<li>{t}</li>))}</ul>
        </div>
    )
}