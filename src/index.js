import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


import {Provider} from "react-redux";
import {setupStore} from "./redux";

import {initializeApp} from "firebase/app";
import 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCEbKsfQeJy6fOiacNCoIwP9f3d58_wObo",
    authDomain: "film-project-90edb.firebaseapp.com",
    projectId: "film-project-90edb",
    storageBucket: "film-project-90edb.appspot.com",
    messagingSenderId: "284319217855",
    appId: "1:284319217855:web:51fbf9be6633cd8d302e0a",
    measurementId: "G-1F3RVLFDZD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider}


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore()
root.render(
    <Provider store={store}>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

