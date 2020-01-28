import React from 'react';
import styles from './Button.module.scss'

export const Button = React.memo(props => {
    return (
        <button
            disabled={props.disable}
            className={[styles.buttonWrapper, (props.disable ? ' ' + styles.buttonDisabled : '')].join(" ")}
            >
                {props.buttonName}
            </button>
    )
}
)