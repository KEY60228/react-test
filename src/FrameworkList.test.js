import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import FrameworkList from './FrameworkList'

afterEach(() => cleanup())

describe("Rendering the list with props", () => {
    it("Should render No Data! when no data propped", () => {
        render(<FrameworkList />)
        expect(screen.getByText("No Data!")).toBeInTheDocument()
    })
})