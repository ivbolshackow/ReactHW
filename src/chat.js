import React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const Chat = () => {
    const [messagesChat] = useState([
        { name: "Иван", id: 231, txt: "привет" },
        { name: "Сергей", id: 232, txt: "добрый" },
        { name: "Данил", id: 233, txt: "как дела?" },
        { name: "Евгения", id: 234, txt: "погода" },
        { name: "Елизавета", id: 235, txt: "куда" },
    ]);

    return (
        <div className="messageList">
            <div>Чат:</div>
            {messagesChat.map((el, id) => (
                <span key={id}>
                    {el.name} говорит: {el.txt}
                    <br></br>
                </span>
            ))}
            <List />
            <ListItem />
        </div>
    );
};