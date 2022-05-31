import './App.css';
//import Message from "./components/message/Message.js";
import MessageList from "./components/messagelist/Messagelist.js";

function App(props) {
    return (    
        <div className="App">
            <header className="App-header">
                <MessageList />
            </header>
        </div>
    );
}

export default App;