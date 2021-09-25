import { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./register.scss"
import axios from "axios"

export default function Register() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = async (e) => {
        e.preventDefault()
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try{
            await axios.post("auth/register", {email,username,  password})
        history.push("/login")
        }catch(err){

        }
        
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""
                    />
                    <button className="loginButton" to="/login">Zaloguj się</button> 
                </div>
            </div>
            <div className="container">
                <h1>Nieograniczone filmy, programy telewizyjne i nie tylko.</h1>
                <h2>Oglądaj w dowolnym miejscu. Anuluj w dowolnym momencie.</h2>
                <p>
                Gotowy do oglądania? Wpisz swój adres e-mail, aby utworzyć lub wznowić członkostwo.
                </p>{
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Adres email" ref={emailRef}/>
                            <button className="registerButton" onClick={handleStart}>Zacznij</button>
                        </div>
                    ) : (
                        <form className="input">
                            <input type="username" placeholder="Login" ref={usernameRef}/>
                            <input type="password" placeholder="Hasło" ref={passwordRef}/>
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </form>
                    )
                }
                
            </div>
        </div>
    )
}
