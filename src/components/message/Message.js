import './Message.css';

function Message(props) {
    return (    
        <div className="Message">
            <header className='Message-header'>
                <h1>{props.props1}</h1>
            </header>
        </div>
    );
}

export default Message;