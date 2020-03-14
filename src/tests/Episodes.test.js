import React from "react"
import { render } from "@testing-library/react"

import { episodes } from "../mockData";
import Episodes from "../components/Episodes"

test('Episodes renders correctly', () => {
    const { queryAllByTestId, queryAllByText } = render(<Episodes episodes={[]}/>)

    expect(queryAllByTestId(/episode/i)).toHaveLength(0);
    expect(queryAllByText(/chapter/i)).toHaveLength(0);
})

test('Episodes displayed correctly after api fetch', () => {
    
    
    const { queryAllByTestId, queryAllByText, rerender } = render(<Episodes episodes={[]}/>)

    expect(queryAllByTestId(/episode/i)).toHaveLength(0);

    rerender(<Episodes episodes={episodes} />)

    expect(queryAllByTestId(/episode/i)).toHaveLength(8)
    expect(queryAllByText(/chapter/i)).toHaveLength(8);


})