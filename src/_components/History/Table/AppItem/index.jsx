import React from 'react';
import styles from './AppItem.module.scss'

export const AppItem = (props) => {
    return (
        <div className={styles.tableRow}>
            <div className={styles.elem}>Заявка {props.app.id}</div>
            <div className={styles.elem}>{props.app.state.name}</div>
            <div className={styles.elem}>{props.app.created_at}</div>
            <div className={styles.elem}>{props.app.updated_at}</div>
        </div>
    )
}