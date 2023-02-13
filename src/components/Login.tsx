import React, { useState } from "react";
import useKeyEnter from "../hooks/helpers/useKeyEnter";
import useLogin from "../hooks/auth/useLogin";


const Login:React.FC = () => {
    const {sendAuthData, changeLogPass, login, password, isWarnShow} = useLogin('/menu')
    const {handleKey} = useKeyEnter(sendAuthData)

    return (
        <div className="login-wrapper">
            <div className='login'>
                <h1 className="login-header">Выполните вход</h1>
                <input name='login' className="login-input" placeholder="Логин" value={login} onChange={changeLogPass}/>
                <input name='password' onKeyDown={handleKey} className="login-input" placeholder="Пароль" type='password' value={password} onChange={changeLogPass}/>
                {isWarnShow && <h1 className="login-incorrect">! Логин или пароль введены некорректно</h1>}
                <button className="login-check" onClick={sendAuthData}>Войти</button>
            </div>
        </div>
    )
}

export default Login