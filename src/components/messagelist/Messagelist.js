import React, {useState,useEffect} from "react";
const MessageList =() => {
    const [messageuser, setMessageUser] = useState("");
    const [messagetext, setMessageText] = useState("");
    const [messages, setMessages] = useState([
        {"author": "Bot",
        "message": "Hello from Bot"}
    ])

    useEffect(() => {
        const lastMessages = messages[messages.length -1]
        if(messages.length && lastMessages?.author !=="Bot"){
            setTimeout(()=> {
                setMessages([...messages,{"author": "Bot", "message": "Приветсвую тебя " + lastMessages.author}]);
            }, 5000);
        }
    },[messages])

    const sendMessage = () => {
        if(messageuser && messagetext){
            setMessages([...messages,{ author: messageuser, message: messagetext}]);
            setMessageUser("");
            setMessageText("");
        }
        
    }
    return (
        <div>
            <div>
                <div><label>Введите имя пользователя</label></div>
                <input placeholder="Имя" 
                        value={messageuser} 
                        onChange={(e) => setMessageUser(e.target.value)}
                />
            </div>
            <div>
                <div><label>Введите текст сообщения</label></div>
                <input placeholder="Введите текст сообщения" 
                        value={messagetext}                         
                        onChange={(e) => setMessageText(e.target.value)} 
                />
            </div>
            <div><button onClick={sendMessage}>Отправить в чат</button></div>
            <hr/>
            <h3>Сообщения:</h3>
            {messages.map((message) =>(
                <div>
                    <h4>{message.author}:</h4>
                    <p>{message.message}</p>
                    <hr/>
                </div>

            ))}

            

        </div>
    )
}

export default MessageList;