import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MessageList } from './MessageList';
import { Form } from './Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <MessageList />
        <Form />
    </React.StrictMode>
);



