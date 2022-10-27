import React from "react";
import { useState } from "react";

export const MessageList = () => {
    const [messageList] = useState([
        {
            author: "Петров",
            text: "пройтись",
            idx: '1',
        },
        {
            author: "Иванов",
            text: "отдохнуть",
            idx: '1',
        },
        {
            author: "Смирнов",
            text: "пробежаться",
            idx: '1',
        },
    ]);
    return (
        <div className="messageList">
            <div className="messageTitle">Список предложений:</div>
            <hr />
            <div className="messageSubtitle">
                {messageList.map((el, idx) => (
                    <span key={idx} className="spanMessage">
                        {el.author} предложил: {el.text}
                        <br></br>
                    </span>
                ))}
            </div>
        </div>
    );
};