import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AddItemPage = () => {

    const navigate = useNavigate();

    const addItem = async (e) => {
        try {
            e.preventDefault();
            const newItem = {
                name: e.target.name.value,
                price: e.target.price.value,
                active: e.target.active.checked
            };

            const result = await axios.post("http://localhost:8080/api/item", newItem);
            console.log(result.data);
            navigate("/items");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form className='w-25' onSubmit={addItem}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="price" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name='active' />
                    <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
