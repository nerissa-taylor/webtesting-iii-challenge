// Test away
// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open



// import '@testing-library/jest-dom/extend-expect';


// when locked or closed use the red-led class
import Dashboard from '../dashboard/Dashboard';

import React from 'react';
import Display from './Display';
import { render } from '@testing-library/react';
test('displays locked if true', () => {
    const { getByText } = render(<Display />);
    getByText(/locked/i);

})