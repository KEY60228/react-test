import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RenderInput from './RenderInput'

afterEach(() => cleanup())

describe("Rendering", () => {
    it("Should render all the elements collectly", () => {
        render(<RenderInput />)
        expect(screen.getByRole("button")).toBeTruthy()
        expect(screen.getByPlaceholderText("Enter")).toBeTruthy()
    })
})

describe("Input form onChange event", () => {
    it("Should update input value correctly", () => {
        render(<RenderInput />)
        const inputValue = screen.getByPlaceholderText("Enter")
        userEvent.type(inputValue, "test")
        expect(inputValue.value).toBe("test")
    })
})
