import React from 'react';
import covid19 from '../../Images/corona.png';
import corona from '../../Images/download.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={covid19} alt="covid19" />
            <div className={styles.rotate}><img src={corona} alt="corona" /></div>
            <p className={styles.about}><a target="_blank" rel="noreferrer"style={{color: 'white', textDecoration: 'none'}} href="https://github.com/golammostafa13">About me</a></p>
        </div>
    );
};

export default Header;
