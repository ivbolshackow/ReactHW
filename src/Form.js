import React from "react";
import "./form.css"
import { useState, useEffect } from "react";

export const Form = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log("form", name, surname, email);
    };

    const Type = useEffect(() => {
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
            <form className="formStyle">
                <input
                    className="formInput"
                    id="name"
                    value={name}
                    type="text"
                    placeholder="Имя"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="formInput"
                    id="surname"
                    value={surname}
                    type="text"
                    placeholder="Фамилия"
                    onChange={(e) => setSurname(e.target.value)}
                />
                <input
                    className="formInput"
                    id="email"
                    value={email}
                    type="email"
                    placeholder="mail@mail.ru"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="formSubmit" type="submit" onClick={submitForm}>
                    отправить
                </button>
            </form>
            <div className="formRobot">Робот..</div>
        </div >
    );
};