import { useState, useRef } from "react";
import { Message } from '../components/Message/Message'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './Chatpage.css'

const Chatpage = () => {
    const [messageList, setMessageList] = useState([]);
    const inputRef = useRef(null);
    const sendMess = (e) => {
        e.preventDefault()
        if (e.target.elements.message.value !== '') {
            setMessageList([...messageList, {
                id: messageList.length,
                author: 'User',
                text: e.target.elements.message.value,
            }])
            e.target.elements.message.value = '';
        }
    }

    return <>
        <Message message={messageList} />
        <form className="formStyle" onSubmit={sendMess}>
            <TextField
                className="formInput"
                id="email"
                margin="normal"
                name="message"
                inputRef={inputRef}
                type="text"
                placeholder="message"
            />
            <Button className="buttonRobot" type="submit" variant="outlined">Отправить</Button>
        </form>

    </>
}

export { Chatpage }