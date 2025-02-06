import { render } from "@testing-library/react";
import React from 'react';
import ShoppingList from './ShoppingList';

it('renders without crashing', function () {
    render(<ShoppingList />)
});

it("matches snapshot", function () {
    const { asFragment } = render(<ShoppingList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function () {
    const { queryByText } = render(<ShoppingList />);
    expect(queryByText('Name: Chocolate Milk')).not.toBeInTheDocument();
})