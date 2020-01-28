import React from 'react';
import { AppItem } from './AppItem'

export const Table = () => {
    let state = {
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
                },
                created_at: "2019-10-07T16:05:09",
                updated_at: "2019-11-08T05:25:17",
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
                },
                created_at: "2019-04-11T16:05:09",
                updated_at: "2019-11-08T05:25:17",
            },
            {
                id: 223,
                state: {
                    id: 2,
                    name: 'Новое'
                },
                subject: {
                    id: 1,
                    name: 'Технические ошибки'
                },
                created_at: "2019-08-11T13:05:09",
                updated_at: "2019-08-02T05:25:17",
            }
        ]
    }
    let listOfApplications = state.list.map(elem => <AppItem key={elem.id} app={elem} />)
    return (
        <>
            <header>Заголовок таблицы</header>
            {listOfApplications}
        </>
    )
}