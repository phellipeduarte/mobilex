import React from 'react'

interface ButtonProps {
    text: string;
    to: string
}

export const Button = (props: ButtonProps) => {
    return (
        <a type="button" className="transition text-black bg-white focus:text-white focus:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded text-sm px-4 py-2 text-center hover:text-white hover:bg-gray-400" href={props.to}>{props.text}</a>
    )
}
