import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('http://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({username: "Bred dummy"}))
    })
)

beforeAll(() => server.listen())
afterEach(() => {
    server.resetHandlers()
    cleanup()
})
afterAll(() => server.close)