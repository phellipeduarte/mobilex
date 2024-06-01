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
    main = " text-white bg-black dark:text-black dark:bg-white hover:bg-zinc-200",
    secondary = " text-black bg-white border border-black dark:text-white dark:bg-black hover:bg-neutral-900"
}

export const Button = (props: ButtonProps) => {
    return (
        <a type="button" className={"transition duration-300 text-center uppercase rounded border dark:border-white" + props.size + props.type} href={props.to} > {props.text}</a >
    )
}
