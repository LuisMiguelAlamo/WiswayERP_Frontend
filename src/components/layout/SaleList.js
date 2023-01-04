import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const SaleList = () => {

    const [sale, setSale] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getSale();
    }, []);


    const getSale = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/sale');
            console.log(result.data);
            setSale(result.data);
        } catch (error) {
            console.log(error);
        }
    }



    const deleteSale = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/sale/${id}`);
            console.log(response.data);
            const itemUpdated = sale.filter((sale) => sale.id !== id);
            setSale(itemUpdated);
        } catch (error) {
            console.log(error);
        }
    }

    const goToSaleCard = (id) => {
        navigate(`/sale/${id}`);
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Total Sale</th>
                    <th scope="col">Date</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Active</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {sale.map((sale) => {
                    return (
                        <tr key={sale.id}  >
                            <td>{sale.id}</td>
                            <td>{sale.total_sale}</td>
                            <td>{sale.sale_date}</td>
                            <td>{sale.customer.name}</td>
                            <td>
                                <div className="form-check">
                                    {!sale.active ?
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        :
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                    }
                                </div>
                            </td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={(e) => deleteSale(sale.id)}>Delete</button>
                                <button className='btn btn-outline-primary mx-3' onClick={(e) => goToSaleCard(sale.id)}>See</button>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
