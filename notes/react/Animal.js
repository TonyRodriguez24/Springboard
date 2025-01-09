const Animal = (props) => (
    <ul>
        <li>Emoji: {props.emoji}</li>
        <li>Name: {props.name} </li>
        <li>Species: {props.species} </li>
        <li>You {props.isCute ? 'cute' : 'not cute'}</li>
    </ul>
)