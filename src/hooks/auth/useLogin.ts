import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IAuthRes {
    name: string,
    token: string
}

const useLogin = (navWhere:string) => {
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

     return {sendAuthData, changeLogPass, login, password, isWarnShow}
}

export default useLogin