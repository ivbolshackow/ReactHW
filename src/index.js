import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MessageList } from './MessageList';
import { Form } from './Form';
import { Chat } from './chat';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <MessageList />
        <Chat />
        <Form />
    </React.StrictMode>
);



