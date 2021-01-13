// Imports
// React Imports
import React from 'react';
// Redux imports
import {useSelector} from 'react-redux';

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

// Gents Section
export const Gents = () => {
    const products = useSelector((state: ProductItem[]) => state)
    products.map((product)=>console.log(product))
    return (
        <div>

        </div>
    )
}