import React from 'react';
import { Item } from './Item';
import { Form } from './Form';
import styles from './New.module.css'

export class New extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 111,
                    state: {
                        id: 1,
                        name: 'Ждет оценки'
                    },
                    subject: {
                        id: 0,
                        name: 'Внесение изменений в карточку товара на сайте'
                    }
                },
                {
                    id: 222,
                    state: {
                        id: 1,
                        name: 'Ждет оценки'
                    },
                    subject: {
                        id: 1,
                        name: 'Технические ошибки'
                    }
                }
            ]
        }
    }
    render(){
        const li = this.state.list.map((elem) => <Item props={elem} key={elem.id} />)
        return (
        <>
        <div className={styles.tableContainer}> 
        {li}
        </div>
        <Form />
        </>
        )
    }
}