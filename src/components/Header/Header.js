import React, {useEffect, useRef, } from 'react';
import {Link, NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {UserInfo} from "../UserInfo/UserInfo";
import {useTheme} from "../../hooks/useTheme";





const Header = () => {
    const {theme, setTheme} = useTheme();
    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    const search = useRef()




    return (
        <div className={css.header_wrap}>
            <div className={css.Header}>
                <div className={css.Bar_logo}>
                    <div>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <a href='/' style={{color: 'deepskyblue'}}>filmX</a>

                </div>
                <div className={css.Categories}>
                    <NavLink to={""}>home</NavLink>
                    <NavLink to={"popular"}>popular movies</NavLink>
                    <div>

                    <NavLink to={"genres"} >genres</NavLink>
                    </div>
                    <NavLink to={"about"}>about</NavLink>
                </div>
                <div className={css.Search}>
                    <div className={css.submit}>
                    <input type="text" placeholder={"search"} ref={search}/>
                    {/*<Link to={`/search:${searchname}`}>*/}
                        <button >search</button>
                    {/*</Link>*/}
                    </div>
                    <div className={css.button_div}>
                        <button onClick={handleDarkThemeClick}><i className="fa-solid fa-moon"></i></button>
                        <button onClick={handleLightThemeClick}><i className="fa-solid fa-sun"></i></button>
                    </div>
                </div>
                <div className={css.user_login}>
                    <UserInfo/>
                    <div className={css.login}>
                        <p>dangernazik</p>
                        <p style={{color: 'deepskyblue'}}>log out</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {Header};