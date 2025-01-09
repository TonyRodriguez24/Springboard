const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name='tony' />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);