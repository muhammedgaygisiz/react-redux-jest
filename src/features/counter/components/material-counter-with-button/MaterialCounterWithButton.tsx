import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import styles from './MaterialCounterWithButton.module.css';

export function MaterialCounterWithButton({value = 0, onIncrement = () => {}, onDecrement = () => {}}) {
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
        setLocalValue(value);
    }, [value])

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