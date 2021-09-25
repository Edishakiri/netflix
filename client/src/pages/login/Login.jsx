
import { useContext, useState } from "react"
import { login } from "../../authContext/apiCalls"
import { AuthContext } from "../../authContext/AuthContext"
import "./login.scss"

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        login({email,password}, dispatch);
    }

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Wbijaj!</h1>
                    <input className="email" placeholder="Email albo numer telefonu" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="password" placeholder="Hasło" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleLogin}>Zaloguj się</button>
                    <span>Nowy na Netflixie? <b>Zaloguj się teraz!</b></span>
                    <small>
                    Ta strona jest chroniona przez Google reCAPTCHA, aby upewnić się, że nie jesteś
                    botem. <b>Czytaj więcej</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}
