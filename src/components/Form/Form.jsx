import React from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import style from './Form.module.scss';

export default function Form({ handlerForm, handleInputs, inputs }) {
    console.log('Form')
    return (
        <div className={style.Form_Form__DMpDX}>
            <form classname="" onSubmit={handlerForm}>
                <div id="emailHelp" className="form-text">Ваше имя:</div>
                <div className="mb-3">
                    <TextField
                        className="formInput"
                        id="exampleInputEmail1"
                        margin="normal"
                        name="title"
                        onChange={handleInputs}
                        value={inputs.title}
                        type="text"
                        placeholder="message"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">Ваше сообщение:</div>
                </div>
                <div className="mb-3">
                    <TextField
                        className="formInput"
                        margin="normal"
                        name="text"
                        onChange={handleInputs}
                        value={inputs.text}
                        type="text"
                        placeholder="message"
                        aria-describedby="emailHelp"
                        id="exampleInputPassword1"
                    />
                </div>
                <Button className="buttonRobot" type="submit" variant="outlined">Отправить</Button>
            </form>
        </div>
    )
}