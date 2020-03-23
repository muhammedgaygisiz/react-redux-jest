import React, { useState } from 'react';
import styles from './MaterialCounterWithButton.module.css';
import Button from '@material-ui/core/Button';

export function MaterialCounterWithButton({value = 0, onIncrement, onDecrement}) {
    const [localValue, setLocalValue] = useState(value);

    const increase = () => {
        setLocalValue(localValue + 1);
        onIncrement();
    }

    const decrease = () => {
        setLocalValue(localValue - 1);
        onDecrement();
    }

    return (
        <div className={styles.row}>
            <Button variant="contained" color="primary" onClick={increase}>+</Button>
            <span className={styles.value}>{localValue}</span>
            <Button variant="contained" color="secondary" onClick={decrease}>-</Button>
        </div>
    );
}