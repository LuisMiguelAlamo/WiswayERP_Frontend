import React from 'react'
import { useNavigate } from "react-router-dom";
import { ProductList } from '../layout/ProductList';

export const Product = () => {

    const navigate = useNavigate();


    const goToAddProduct = () => {
        navigate("/addProduct");
    }


    return (
        <div>
            <ProductList></ProductList>
            <button className='btn btn-outline-success' onClick={goToAddProduct}>Add</button>
        </div>
    )
}
