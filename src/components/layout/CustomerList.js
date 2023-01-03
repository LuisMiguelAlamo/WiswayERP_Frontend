import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { useRequest } from '../../hooks/useRequest';


export const CustomerList = () => {

    const [customer, setCustomers] = useState([]);
    const navigate = useNavigate();
    // const { datos, create, readAll, update, remove } = useRequest('http://localhost:8080/api/customer');

    useEffect(() => {
        getCustomers();
        // readAll();
    }, []);


    const getCustomers = async (req, res) => {
        try {
            const result = await axios.get('http://localhost:8080/api/customer');
            setCustomers(result.data);
        } catch (error) {
            console.log(error);
        }
    }



    const deleteCustomer = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/customer/${id}`);
            console.log(response.data);
            const customerUpdated = customer.filter((customer) => customer.id != id);
            setCustomers(customerUpdated);
        } catch (error) {
            console.log(error);
        }
    }

    const goToCustomerCard = (id) => {
        navigate(`/customer/${id}`);
    }

    const activeCheck = () => {

    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Active</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {customer.map((customer) => {
                    return (
                        <tr key={customer.id}  >
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>
                                <div className="form-check">
                                    {!customer.active ?
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={activeCheck} />
                                        :
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked onChange={activeCheck} />
                                    }
                                </div>
                            </td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={(e) => deleteCustomer(customer.id)}>Delete</button>
                                <button className='btn btn-outline-primary mx-3' onClick={(e) => goToCustomerCard(customer.id)}>See</button>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
