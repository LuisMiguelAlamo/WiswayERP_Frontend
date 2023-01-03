import React from 'react'
import { CustomerList } from '../layout/CustomerList'
import { useNavigate } from "react-router-dom";

export const Customers = () => {
    const navigate = useNavigate();

    const goToAddCustomer = () => {
        navigate("/addCustomer");
    }

    return (
        <div>
            <h1>Customers</h1>
            <CustomerList></CustomerList>
            <button className='btn btn-outline-success' onClick={goToAddCustomer}>Add</button>
        </div>
    )
}
