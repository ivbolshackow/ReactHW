import { useState } from 'react';
import { ListItem } from '../ListItem/ListItem';
import style from './ChatList.module.scss'
const ChatList = () => {
    const [ChatList, setChatList] = useState([
        {
            id: 1,
            name: '1 chat',
        },
        {
            id: 2,
            name: '2 chat',
        },
        {
            id: 3,
            name: '3 chat',
        },
        {
            id: 4,
            name: '4 chat',
        },
    ]);

    return (
        <ul className={style.ul}>
            {ChatList.map((chatItemData) => {
                return (
                    <ListItem chatItemData={chatItemData} />
                );
            })}
        </ul>
    );
}

export { ChatList }