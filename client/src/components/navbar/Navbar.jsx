import "./navbar.scss"
import React, { useContext, useState } from 'react'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { logoutStart } from "../../authContext/AuthActions"
import { AuthContext } from "../../authContext/AuthContext"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { dispatch } = useContext(AuthContext)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null
    }
   
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" 
                    />
                    <Link to="/" className="link">
                    <span>Strona główna</span>
                    </Link>
                    <Link to="/series" className="link"> 
                    <span className="navbarmainLink">Seriale i programy</span>
                    </Link>
                    <Link to="/movies" className="link"> 
                    <span className="navbarmainLink">Filmy</span>
                    </Link> 
                    <span>Nowe i popularne</span> 
                    <span>Moja lista</span> 
                </div>
                
                <div className="right">
                    <Search className="icon"/>
                    <span>Dzieci</span>
                    <Notifications className="icon"/>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" 
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Centrum pomocy</span>
                            <span onClick={() => dispatch(logoutStart())}>Wyloguj się</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
