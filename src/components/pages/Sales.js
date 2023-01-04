import React from 'react'
import { CustomerList } from '../layout/CustomerList'
import { SaleList } from '../layout/SaleList'
import { useNavigate } from "react-router-dom";

export const Sales = () => {

    const navigate = useNavigate();

    const goToAddSale = () => {
        navigate("/addSale");
    }

    return (
        <div>
            <h1>Sales</h1>
            <SaleList></SaleList>
            <button className='btn btn-outline-success' onClick={goToAddSale}>Add</button>
        </div>
    )
}
