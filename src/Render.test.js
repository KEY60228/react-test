import React from 'react'
import { render, screen } from '@testing-library/react'
import Render from "./Render"

describe("Rendering", () => {
    it ("Should render all the elements collectly", () => {
        render(<Render />)
        screen.debug()
    })
})