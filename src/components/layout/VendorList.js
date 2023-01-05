import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const VendorList = () => {

    const [vendor, setVendor] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getVendors();
    }, []);


    const getVendors = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/vendor');
            setVendor(result.data);
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    }



    const deleteVendor = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/vendor/${id}`);
            console.log(response.data);
            const customerUpdated = vendor.filter((vendor) => vendor.id !== id);
            setVendor(customerUpdated);
        } catch (error) {
            console.log(error);
        }
    }

    const goToVendorCard = (id) => {
        navigate(`/vendor/${id}`);
    }

    const activeCheck = () => {

    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Active</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {vendor.map((vendor) => {
                    return (
                        <tr key={vendor.id}  >
                            <td>{vendor.id}</td>
                            <td>{vendor.name}</td>
                            <td>{vendor.address}</td>
                            <td>{vendor.phone}</td>
                            <td>
                                <div className="form-check">
                                    {!vendor.active ?
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={activeCheck} />
                                        :
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked onChange={activeCheck} />
                                    }
                                </div>
                            </td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={(e) => deleteVendor(vendor.id)}>Delete</button>
                                <button className='btn btn-outline-primary mx-3' onClick={(e) => goToVendorCard(vendor.id)}>See</button>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
