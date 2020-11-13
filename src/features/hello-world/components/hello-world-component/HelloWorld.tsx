import React, { Fragment } from 'react';

// <Fragment> prevent compile error

export const HelloWorld = () => {
    return (
        <Fragment>
            <div>Hello World 1</div>
            <div>Hello World 2</div>
        </Fragment>
    );
}