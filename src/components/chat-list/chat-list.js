import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
    const [chats] = useState(["Чат1", "Чат2", "Чат3"]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <List component="nav">
            {chats.map((chat,index) =>(
                <Chat
                    key={chat}
                    title={chat}
                    selectetd={selectedIndex === index}
                    handleListItemClick={()=> setSelectedIndex(index)}
                />
            ))}
        </List>
    );
};