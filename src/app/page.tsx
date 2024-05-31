"use client";

import { Product } from "./components/Product";
import { useState, useEffect } from "react";

export default function Home() {

  const [products, setProducts] = useState([])

  const getProducts = async (url: string) => {
    const res = await fetch(url)
    if (res.ok) {
      const data = await res.json()
      setProducts(data)
    }
  }

  useEffect(() => {
    const url = "https://products-44fa.onrender.com/products"
    getProducts(url)
  }, [])


  return (
    <>
      <section>
        {products.length === 0 && <div className="loading"><p>Carregando...</p></div>}
        {products.length > 0 && products.map((product) => <Product key={product.id} name={product.name} price={product.price} />)}
      </section>
    </>
  );
}
