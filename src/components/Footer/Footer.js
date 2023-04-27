import React from 'react';

import css from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={css.footer}>
            <p className={css.footer_text}>Copyright © 2023</p>
            <div className={css.info}>
                <div className={css.numbers}>
                    Contacts:
                    <div>(577) 946-8529</div>
                    <div>filmX@gmail.com</div>
                </div>
                <div className={css.social_medias}>Social medias:
                    <div className={css.icons}>
                        <div className={css.facebook}>
                            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i> </a>

                        </div>
                        <div className={css.instagram}>
                            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>

                        </div>
                        <div className={css.telegram}>
                            <a href="https://web.telegram.org/k/"><i className="fa-brands fa-telegram"></i></a>


                        </div>
                        <div className={css.twitter}>
                            <a href="https://twitter.com/home"><i className="fa-brands fa-twitter"></i></a>


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export {Footer};