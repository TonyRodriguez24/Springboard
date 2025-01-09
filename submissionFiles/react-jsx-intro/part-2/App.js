const App = () => (
    <div>
        <Tweet username = 'tonyr97' name = 'tony' date = '1-7-25' message = 'Hi my name is tony and this is my tweet and I wish that they were still called tweets instead of whatever they are called on X now'/>
        <Tweet username = 'steve45' name = 'steve' date = '1-7-25' message = 'Hi my name is steve and this is my tweet and I second that they were still called tweets instead of whatever they are called on X now'/>
        <Tweet username = 'bill43' name = 'bill' date = '1-7-25' message = 'Hi my name is bill and this is my tweet and I also agree and wish that they were still called tweets instead of whatever they are called on X now'/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)