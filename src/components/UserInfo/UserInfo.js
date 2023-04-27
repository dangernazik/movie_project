import React from 'react';

import css from '../Header/Header.module.css'
const UserInfo = () => {

    const image = localStorage.getItem('image')

    return (
        <div className={css.user}>
            {localStorage.length > 0 ?
                <img src={image} alt="user"/> :
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="user"/>
            }
        </div>
    );
};

export {UserInfo};