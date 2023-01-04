import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const ItemList = () => {

    const [item, setItem] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getItems();
    }, []);


    const getItems = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/item');
            console.log(result.data);
            setItem(result.data);
        } catch (error) {
            console.log(error);
        }
    }



    const deleteItem = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/item/${id}`);
            console.log(response.data);
            const itemUpdated = item.filter((item) => item.id !== id);
            setItem(itemUpdated);
        } catch (error) {
            console.log(error);
        }
    }

    const goToItemCard = (id) => {
        navigate(`/item/${id}`);
    }


    const activeCheck = () => {

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
                {item.map((item) => {
                    return (
                        <tr key={item.id}  >
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <div className="form-check">
                                    {!item.active ?
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={activeCheck} />
                                        :
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked onChange={activeCheck} />
                                    }
                                </div>
                            </td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={(e) => deleteItem(item.id)}>Delete</button>
                                <button className='btn btn-outline-primary mx-3' onClick={(e) => goToItemCard(item.id)}>See</button>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
