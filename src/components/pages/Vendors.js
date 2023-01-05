import React from 'react'
import { VendorList } from '../layout/VendorList'
import { useNavigate } from "react-router-dom";

export const Vendors = () => {

    const navigate = useNavigate();

    const goToAddVendorPage = () => {
        navigate("/addVendor");
    }

    return (
        <div>
            <h1>Vendors</h1>
            <VendorList></VendorList>
            <button className='btn btn-outline-success' onClick={goToAddVendorPage}>Add</button>
        </div>
    )
}
