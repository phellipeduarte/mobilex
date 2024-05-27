import React from 'react'

interface ButtonProps {
    text: string;
    to: string
}

export const Button = (props: ButtonProps) => {
    return (
        <button type="button" className="transition text-black bg-white focus:text-white focus:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded text-sm px-4 py-2 text-center hover:text-white hover:bg-green-600">{props.text}</button>
    )
}
