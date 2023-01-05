import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProduct();
    }, []);


    const getProduct = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/product');
            console.log(result.data);
            setProduct(result.data);
        } catch (error) {
            console.log(error);
        }
    }



    const deleteItem = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/product/${id}`);
            console.log(response.data);
            const itemUpdated = product.filter((product) => product.id !== id);
            setProduct(itemUpdated);
        } catch (error) {
            console.log(error);
        }
    }

    const goToItemCard = (id) => {
        navigate(`/product/${id}`);
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Active</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {product.map((product) => {
                    return (
                        <tr key={product.id}  >
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <div className="form-check">
                                    {!product.active ?
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        :
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                    }
                                </div>
                            </td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={(e) => deleteItem(product.id)}>Delete</button>
                                <button className='btn btn-outline-primary mx-3' onClick={(e) => goToItemCard(product.id)}>See</button>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
