const App = () => (
    <div>
        <Alert>
            <RandomNumberRange min={20} max={30} />
            <RandomNumberRange />
        </Alert>
        <RandomChoice choices={['red', 'green' , 'yellow' ,'blue', 'orange'] } />
        <Animal name='Stevie Chicks' species='silky chicken' emoji='some emoji' isCute ={true} />
        <Animal name= 'pat' species = 'red fox' emoji = 'fox emoji'/>
        <RandomNum />
        <RandomNum />
        <Bouncer age={19} />
        <Bouncer age={11} />
        <Bouncer age={39} />
        <TodoList todos={['walk chickens', 'eat chickens', 'feed chickens']} />
        
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));