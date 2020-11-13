import React from 'react';
import { MaterialCounterWithButton } from './MaterialCounterWithButton';

export default {
    title: 'Components',
    component: MaterialCounterWithButton,
} as Meta;

export const counterWithButton = () =>
    <MaterialCounterWithButton></MaterialCounterWithButton>;