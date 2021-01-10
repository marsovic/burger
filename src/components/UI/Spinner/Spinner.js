import React from 'react';
import styles from "./Spinner.module.css";

const spinner = () => (
    <div className={styles.Loader}>Loading... {console.log('yo')}</div>

);

export default spinner;