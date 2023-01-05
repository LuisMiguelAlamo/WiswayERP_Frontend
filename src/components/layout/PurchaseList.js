import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const PurchaseList = () => {
    const [purchase, setPurchase] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getPurchase();
    }, []);


    const getPurchase = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/purchase');
            console.log(result.data);
            setPurchase(result.data);
        } catch (error) {
            console.log(error);
        }
    }



    const deletePurchase = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/purchase/${id}`);
            console.log(response.data);
            const itemUpdated = purchase.filter((purchase) => purchase.id !== id);
            setPurchase(itemUpdated);
        } catch (error) {
            console.log(error);
        }
    }

    const goToPurchaseCard = (id) => {
        navigate(`/purchase/${id}`);
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Total Purchase</th>
                    <th scope="col">Date</th>
                    <th scope="col">Vendor</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {purchase.map((purchase) => {
                    return (
                        <tr key={purchase.id}  >
                            <td>{purchase.id}</td>
                            <td>{purchase.purchase_total}</td>
                            <td>{purchase.purhcase_date}</td>
                            <td>{purchase.vendor.name}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={(e) => deletePurchase(purchase.id)}>Delete</button>
                                <button className='btn btn-outline-primary mx-3' onClick={(e) => goToPurchaseCard(purchase.id)}>See</button>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
