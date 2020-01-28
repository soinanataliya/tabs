import React from 'react';
import styles from './Form.module.scss'

import { Select } from '../../elements/Select'
import { Button } from '../../elements/Button'
export class Form extends React.Component {
    render() {
        let state = {
            optionsFirst: [
                'Вариант 1',
                'Вариант 2'
            ],
            optionsSecond: [
                'Вариант 3',
                'Вариант 4'
            ],
            isFormDisabled: false
        }
        return (
            <form className={styles.formWrapper}>
                <div className={(state.disable ? styles.labelDisabled : styles.label)}
                >
                    Категория
                </div>
                <Select
                    disable={state.isFormDisabled}
                    options={state.optionsFirst}
                />
                <div className={(state.disable ? styles.labelDisabled : styles.label)}
                >
                    Тема</div>
                <Select
                    disable={state.isFormDisabled}
                    options={state.optionsSecond}

                />
                <div className={styles.buttonWrapper}>
                    <Button
                        buttonName='Создать заявку'
                        disable={state.isFormDisabled}

                    />
                </div>
            </form>
        )
    }
}