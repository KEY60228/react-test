import { useCounter } from './useCounter'
import { cleanup } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'

afterEach(() => cleanup())

describe("useCounter custom Hook", () => {
    it("Shouldincrement by 1", () => {
        const { result } = renderHook(() => useCounter(3))
        expect(result.current.count).toBe(3)
    })
})