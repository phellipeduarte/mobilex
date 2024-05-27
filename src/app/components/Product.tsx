import React from 'react'

interface ProductProps {
    name: string;
    price: number
}

export const Product = (props: ProductProps) => {
    return (
        <div className="flex w-80 justify-between m-2 border-b border-slate-600">
            <p>{props.name}</p>
            <p>R${props.price}</p>
        </div>
    )
}
