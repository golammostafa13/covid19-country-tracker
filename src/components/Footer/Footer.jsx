import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>Copyright &copy; Golam Mostafa <a className={styles.link} href="http://githumb.com/golammostafa13">Github</a></p>
        </div>
    );
};

export default Footer;