const Tweet = (props) => (
    <ul>
        <li>Username: {props.username}</li>
        <li>Name: {props.name}</li>
        <li>{props.date}</li>
        <li>{props.message}</li>
    </ul>
    
)