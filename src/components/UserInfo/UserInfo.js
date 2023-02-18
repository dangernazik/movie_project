import React from 'react';

import css from '../Header/Header.module.css'
const UserInfo = () => {
    return (
        <div className={css.user}>
            <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="user"/>
        </div>
    );
};

export {UserInfo};