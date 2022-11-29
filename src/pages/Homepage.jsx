import React from "react";
import "./Homepage.css"
import { useState, useEffect } from "react";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


export const Homepage = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log("form", name, surname, email);
    };

    const FormEvent = useEffect(() => {
        const robotSaid = document.querySelector(".formRobot");
        const nameId = document.getElementById("name");
        const surnameId = document.getElementById("surname");
        const emailId = document.getElementById("email");


        if (
            nameId.value.length > 0 &&
            surnameId.value.length > 0 &&
            emailId.value.length > 0
        ) {
            setTimeout(() => {
                robotSaid.textContent = `Робот: Приветствую, ${nameId.value} ${surnameId.value}, ваш email: ${emailId.value}! '`;
            }, 2500);
        }
    });

    return (
        <div className="Form">
            <form className="formStyle" onChange={FormEvent}>
                <TextField
                    className="formInput"
                    id="name"
                    margin="normal"
                    value={name}
                    type="text"
                    placeholder="Имя"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    className="formInput"
                    id="surname"
                    margin="normal"
                    value={surname}
                    type="text"
                    placeholder="Фамилия"
                    onChange={(e) => setSurname(e.target.value)}
                />
                <TextField
                    className="formInput"
                    id="email"
                    margin="normal"
                    value={email}
                    type="email"
                    placeholder="mail@mail.ru"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="buttonRobot" type="submit" onClick={submitForm} autoFocus={true} variant="outlined">Отправить</Button>
            </form>
            <div className="formRobot">Робот..</div>
        </div >
    )
}