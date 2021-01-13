// imports
// react imports
import React from 'react';
// Redux imports
import { useSelector } from "react-redux";

// Type definations
interface ProductItem {
    id: number
    name: string
    brand: string
    gender: string
    category: string
    price: number
    is_in_inventory: boolean
    items_left: number
    imageURL: string
    slug: string
    added?: boolean
}

export const Cart = () => {
    const products = useSelector((state: ProductItem[]) => state)
    const product =  products.filter((e) => e.added === true)
    console.log(product)
    return (
        <div>
            Cart
        </div>
    )
}
