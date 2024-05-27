"use client";
import React from 'react'
import { useEffect } from 'react'
import { Button } from './Button'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Collapse } from 'flowbite';

export const Navbar = () => {


    useEffect(() => {
        const $targetEl: HTMLElement = document.getElementById('navbar-sticky')!;
        const $triggerEl: HTMLElement = document.getElementById('navbar-open')!;

        new Collapse(
            $targetEl,
            $triggerEl,
        );
    }, []);


    return (
        <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-green-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo />
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Button text="Entrar" to="/" />
                    <button id="navbar-open" data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="justify-self-end items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black dark:border-gray-700">
                        <NavItem text="Home" to="/" />
                        <NavItem text="About" to="/" />
                        <NavItem text="Marketplace" to="/" />
                    </ul>
                </div>
            </div>
        </nav>

    )
}
