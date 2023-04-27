import React, {useEffect, useState} from 'react';
import {signInWithPopup} from "firebase/auth"
import {auth, provider} from "../index";
import {HomePage} from "./HomePage";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {


    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const login = () => {
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            console.log(data.user);
            localStorage.setItem("email",data.user.email)
            localStorage.setItem("name", data.user.displayName)
            localStorage.setItem("image", data.user.photoURL)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })


    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            {value ? navigate ("/") :
                <button className={"button-cool"} style={{marginTop: "400px", marginBottom: "300px"}} onClick={login} >Google <img style={{width: "20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt=""/></button>}
        </div>
    );
};

export default LoginPage;