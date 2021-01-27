import React from 'react'

const RenderInput = ({outputConsole}) => {
    const [input, setInput] = React.useState("")

    const updateValue = (ev) => {
        setInput(ev.target.value)
    }

    const outputValue = () => {
        if (input.length) {
            outputConsole(input)
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter"
                value={input}
                onChange={updateValue}
            />
            <button
                onClick={outputValue}
            >
                Console
            </button>
        </div>
    )
}

export default RenderInput
