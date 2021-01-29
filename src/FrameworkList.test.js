import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import FrameworkList from './FrameworkList'

afterEach(() => cleanup())

describe("Rendering the list with props", () => {
    it("Should render No Data! when no data propped", () => {
        render(<FrameworkList />)
        expect(screen.getByText("No Data!")).toBeInTheDocument()
    })
    it("Should render list item correctly", () => {
        const dummyData = [
            {id: 1, item: "React dummy"},
            {id: 2, item: "Angular dummy"},
            {id: 3, item: "Vue dummy"},
        ]
        render(<FrameworkList frameworks={dummyData} />)
        const frameworkItems = screen.getAllByRole("listitem").map(el => el.textContent)
        const dummyItems = dummyData.map(el => el.item)
        expect(frameworkItems).toEqual(dummyItems)
        expect(screen.queryByText("No Data!")).toBeNull()
    })
})