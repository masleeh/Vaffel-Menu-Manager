import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface IAuthRes {
    name: string,
    token: string
}


const Login:React.FC = () => {
    // Necessary setups
    const [isWarnShow, setWarnShow] = useState<boolean>(false)
    const navigate = useNavigate()

    // Handling input changes
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const changeLogPass = (event: React.ChangeEvent<HTMLInputElement>):void => {
        const {name, value} = event.target
        if (name === 'login') setLogin(value)
        else setPassword(value)
    }

    // Validating login/password data
    const sendAuthData = async () => {
        try {
            const response = await axios.post<IAuthRes>('http://localhost:5000/api/v1/auth/login', {
                name: login,
                password: password
            })
            localStorage.setItem('vaffel_token', response.data.token)
            navigate('/menu')
        } catch (error) {
            setWarnShow(true)
            setLogin('')
            setPassword('')
        }

    }


    return (
        <div className='login'>
            <h1 className="login-header">Выполните вход</h1>
            <input name='login' className="login-input" placeholder="Логин" value={login} onChange={changeLogPass}/>
            <input name='password' className="login-input" placeholder="Пароль" type='password' value={password} onChange={changeLogPass}/>
            {isWarnShow && <h1 className="login-incorrect">! Логин или пароль введены некорректно</h1>}
            <button className="login-check" onClick={sendAuthData}>Войти</button>
        </div>
    )
}

export default Login