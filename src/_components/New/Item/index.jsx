import React from 'react';
import styles from './Item.module.scss'
export class Item extends React.Component {
    // constructor() {
    //     super();
     
    // }
    render(){
        return (
        <div className={styles.item}>Элемент таблицы</div>
        )
    }
}