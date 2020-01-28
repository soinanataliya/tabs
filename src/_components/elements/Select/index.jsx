import React from 'react';
import styles from './Select.module.scss'

export const Select = (props => {
    let optionsList;
    if (props.options) {
     optionsList = props.options.map((elem) => { return (<option key={elem}>{elem}</option>) })
    } else optionsList = null;
    return (
        <select
        className={(props.disable ? ' ' + styles.selectWrapperDisabled : styles.selectWrapper)}>
            <option value disabled defaultValue>Выберите...</option>
            {optionsList}
        </select>
    )
}
)