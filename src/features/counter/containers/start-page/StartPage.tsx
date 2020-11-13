import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../../reducer';
import { MaterialCounterWithButton, MaterialCounterWithIcon } from '../../components';

export function StartPage() {

    const mapStateToProps = (state: any) => ({value: state.counter.value});

    const mapDispatchToProps = (dispatch: any) => ({
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    })

    const ConnectedCounterWithButton = connect(
        mapStateToProps,
        mapDispatchToProps
    )(MaterialCounterWithButton);

    const ConnectedCounterWithIcon = connect(
        mapStateToProps,
        mapDispatchToProps
    )(MaterialCounterWithIcon);

    return (
        <>
            <ConnectedCounterWithButton />
            <ConnectedCounterWithIcon />
        </>
    );
}