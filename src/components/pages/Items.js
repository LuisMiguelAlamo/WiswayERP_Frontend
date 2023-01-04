import React from 'react'
import { ItemList } from '../layout/ItemList'
import { useNavigate } from "react-router-dom";

export const Items = () => {
    const navigate = useNavigate();


    const goToAddItem = () => {
        navigate("/addItem");
    }


    return (
        <div>
            <h1>Items</h1>
            <ItemList></ItemList>
            <button className='btn btn-outline-success' onClick={goToAddItem}>Add</button>
        </div>
    )
}
