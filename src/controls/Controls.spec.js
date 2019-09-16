// Test away!
// test ('cannot be closed or opened if it is locked')

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('toggled-Locked Open Gate', () => {
    // Arrange
    const { findByText } = render(<Controls />);
    // Act - getting the node by text
    findByText(/toggle-/i);
    findByText(/open gate/i);
    // Assertion is if ^^^ is truthy
});

it('display "Closed" text', () => {
    const { getByText, findByText } = render(<Controls />);
    // Click button
    fireEvent.click(getByText("Close Gate"));
    findByText(/success/i);
});

test('toggledClosed disabled if Lock Gate', () => {
    const { findAllByText } = render(<Controls />);
    findAllByText(/disabled/i);
    findAllByText(/lock gate/i);
});

// test('button text changes to reflect the state the door when clicked')
