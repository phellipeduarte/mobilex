import React from 'react'

interface ButtonProps {
    text: string;
    to: string;
    size: ButtonSize;
    type: ButtonType
}

export enum ButtonSize {
    sm = " py-2 px-5 text-sm",
    md = " py-3 px-12 text-lg",
    lg = " py-4 px-24 text-lg",
}

export enum ButtonType {
    main = " text-black bg-white hover:bg-zinc-200",
    secondary = " text-white bg-black hover:bg-neutral-900"
}

export const Button = (props: ButtonProps) => {
    return (
        <a type="button" className={"transition duration-300 text-center uppercase rounded border border-white" + props.size + props.type} href={props.to} > {props.text}</a >
    )
}
