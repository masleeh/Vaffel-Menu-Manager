import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/auth/useLogin";


const Login:React.FC = () => {
    const {sendAuthData, changeLogPass, login, password, isWarnShow} = useLogin('/menu')


    return (
        <div className="login-wrapper">
            <div className='login'>
                <h1 className="login-header">Выполните вход</h1>
                <input name='login' className="login-input" placeholder="Логин" value={login} onChange={changeLogPass}/>
                <input name='password' className="login-input" placeholder="Пароль" type='password' value={password} onChange={changeLogPass}/>
                {isWarnShow && <h1 className="login-incorrect">! Логин или пароль введены некорректно</h1>}
                <button className="login-check" onClick={sendAuthData}>Войти</button>
            </div>
        </div>
    )
}

export default Login