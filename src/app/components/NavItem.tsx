import React from 'react'

interface NavItemProps {
    text: string;
    to: string
}


export const NavItem = (props: NavItemProps) => {
    return (
        <li>
            <a href={props.to} className="transition block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{props.text}</a>
        </li>
    )
}