import React from 'react';
import { Table } from './Table'

export const History = () => {
    return (
        <div>
            <input type="search" placeholder='Поиск среди всех заявок' />
            <Table />
        </div>
    )
}