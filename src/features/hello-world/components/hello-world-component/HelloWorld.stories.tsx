import React from 'react';
import {HelloWorld} from "./HelloWorld";


export default {
    title: 'Components',
    component: HelloWorld
} as Meta;

export const helloWorld = () =>
    <HelloWorld></HelloWorld>