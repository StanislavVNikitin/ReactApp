import React, {useState,useEffect, useRef} from "react";
import { Message } from "./message";
import { Input, InputAdornment } from "@mui/material";
import { Send } from '@mui/icons-material';


export const MessageList =() => {
    const [messageuser, setMessageUser] = useState("");
    const [messagetext, setMessageText] = useState("");
    const [messages, setMessages] = useState([
        {"author": "Bot",
        "message": "Hello from Bot"}
    ])

    const ref = useRef();

    useEffect(() => {
        if(ref.current) {
            ref.current.scrollTo(0, ref.current.scrollHeight); 
        }
    }, [messages]);

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
        <div ref={ref}>
            <div>
                <Input placeholder="Имя" 
                        value={messageuser} 
                        onChange={(e) => setMessageUser(e.target.value)}
                />
            </div>
            <div>                
                <Input placeholder="Введите текст сообщения" 
                        value={messagetext}                         
                        onChange={(e) => setMessageText(e.target.value)} 
                        fullWidth ={true}
                        endAdornment={
                            <InputAdornment position="end">
                               {messagetext && messageuser && <Send onClick = {sendMessage}/>}
                            </InputAdornment>

                        }
                />
        
 
            </div>
            <h3>Сообщения:</h3>
            {messages.map((message) =>(
                <Message message={message}/>

            ))}
        </div>
    );
};

