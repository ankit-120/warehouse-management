import React from 'react';
import styles from './Loader.module.css'; // Import your CSS module for styling

const Loader = () => {
    return (
        <div className={styles['loader-container']}>
            <div className={styles['loader-item']}></div>
            <div className={`${styles['loader-item']} ${styles['loader-item--2']}`}></div>
            <div className={`${styles['loader-item']} ${styles['loader-item--3']}`}></div>
        </div>
    );
};

export default Loader;
