import { createShallow } from '@material-ui/core/test-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { MaterialCounterWithButton } from "../MaterialCounterWithButton";


describe('Counter with Button', () => {
    it('renders', () => {
        const component = render(
            <MaterialCounterWithButton />
        )

        expect(component).toMatchSnapshot();
    });

    describe('when button is clicked', () => {
        let shallow: any;

        beforeAll(() => {
            shallow = createShallow();
        })

        it('calls its event listener', () => {
            const spy = jest.fn();
            const wrapper = shallow(<MaterialCounterWithButton onIncrement={spy} />);
            wrapper.childAt(0).simulate('click');
            
            expect(spy).toHaveBeenCalled();
        })

        it('increases its value', () => {
            let value = 0;
            const component = <MaterialCounterWithButton value={value} />;

            const wrapper = shallow(component);
            wrapper.childAt(0).simulate('click');
            
            expect(+wrapper.find('span').text()).toEqual(value+1);
        })

    })
});
