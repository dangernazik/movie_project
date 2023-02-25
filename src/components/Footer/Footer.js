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
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className={css.instagram}>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className={css.telegram}>
                            <i className="fa-brands fa-telegram"></i>

                        </div>
                        <div className={css.twitter}>
                            <i className="fa-brands fa-twitter"></i>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export {Footer};