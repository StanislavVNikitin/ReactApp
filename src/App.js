import './App.css';
import Message from "./components/message/Message.js"

function App(props) {
    const props1 = ' Просто текст переданный в PROPS ';
    return (    
        <div className="App">
            <header className="App-header">
            My First React App
            <h3>Hello, {props.name}</h3>
            <Message props1= { props1 } />
            </header>
        </div>
    );
}

export default App;