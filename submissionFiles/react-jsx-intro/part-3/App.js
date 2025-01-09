const App = () => (
    <div>
        <Person age={27} name='rodriguez' hobbies={['singing', 'basketball', 'gym', 'fishing', 'hiking']} />
        <Person age={27} name='rodriguez' hobbies={['singing', 'basketball', 'gym', 'fishing', 'hiking']} />
        <Person age={27} name='rodriguez' hobbies={['singing', 'basketball', 'gym', 'fishing', 'hiking']} />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)