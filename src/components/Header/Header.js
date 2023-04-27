import React, {useRef} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

import css from "./Header.module.css"
import {UserInfo} from "../UserInfo/UserInfo";
import {useTheme} from "../../hooks/useTheme";
import {HomePage} from "../../pages";


const Header = () => {
    const navigate = useNavigate()
    const {theme, setTheme} = useTheme();
    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    const search = useRef()

    const logout = () => {
        localStorage.clear()
        navigate ("/")
    }

    const keywords = localStorage.getItem('name')

    return (
        <div className={css.header_wrap}>
            <div className={css.Header}>
                <div className={css.Bar_logo}>
                    <div>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <Link to={'/'}>filmX</Link>

                </div>
                <div className={css.Categories}>
                    <NavLink to={""}>home</NavLink>
                    <NavLink to={"popular"}>popular movies</NavLink>
                    <div>

                        <NavLink to={"genres"}>genres</NavLink>
                    </div>
                    <NavLink to={"about"}>about</NavLink>
                </div>
                <div className={css.Search}>
                    <div className={css.submit}>
                        <form action="">
                            <input type="text" placeholder={"search"} ref={search} required={true}/>
                            <button onClick={() => {
                                localStorage.setItem('keywords', search.current.value);
                                navigate('/search');
                            }
                            }>search
                            </button>
                        </form>
                    </div>
                    <div className={css.button_div}>
                        <button onClick={handleDarkThemeClick}><i className="fa-solid fa-moon"></i></button>
                        <button onClick={handleLightThemeClick}><i className="fa-solid fa-sun"></i></button>
                    </div>
                </div>
                <div className={css.user_login}>
                    <UserInfo/>
                    <div className={css.login}>
                        {
                            localStorage.length > 0 ?
                                <div className={css.username}>
                                    <p>{keywords}</p>
                                    <button onClick={logout}> log out </button>
                                </div> :
                                <Link to={"login"}>
                                    <button style={{marginLeft: '10px'}}>login </button>
                                </Link>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export {Header};