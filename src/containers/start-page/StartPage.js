import React from 'react';
import { MaterialCounterWithButton, MaterialCounterWithIcon } from '../../components';
import { useSelector, connect } from 'react-redux';
import { selectCount } from '../../selectors'
import { increment, decrement } from '../../actions'

export function StartPage() {
    const count = useSelector(selectCount);

    const mapStateToProps = state => ({ value: state.counter.value });

    const mapDispatchToProps = dispatch => ({
        onIncrement: () => dispatch(increment),
        onDecrement: () => dispatch(decrement)
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