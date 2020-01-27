import React from 'react';
import styles from './Item.module.scss'
export class Item extends React.Component {
    render(){
        const { props } = this.props;
        return (
        <div className={styles.item}>
            <div className={styles.column, styles.idColumn}>Заявка {props.id}</div> 
            <div className={styles.column, styles.stateColumn}>{props.state.name}</div>
            <div className={styles.column, styles.subjectColumn}>{props.subject.name}</div>
        </div>
        )
    }
}