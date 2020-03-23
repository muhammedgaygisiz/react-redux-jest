import React, { useState } from 'react';
import styles from './MaterialCounterWithIcon.module.css';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import { increment } from '../../features/counter/counterSlice';


export function MaterialCounterWithIcon({value = 0, onIncrement, onDecrement}) {
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
            <IconButton color="primary" onClick={increase}>
                <AddCircle style={{ fontSize: 40 }} />
            </IconButton>
            <span className={styles.value}>{localValue}</span>
            <IconButton color="secondary" onClick={decrease}>
                <RemoveCircle style={{ fontSize: 40 }} />
            </IconButton>
        </div>
    );
}