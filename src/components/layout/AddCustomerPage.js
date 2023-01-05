import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AddCustomerPage = () => {

    const navigate = useNavigate();

    const addCustomer = async (e) => {
        try {
            e.preventDefault();
            const newCustomer = {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                active: e.target.active.checked
            };

            const result = await axios.post("http://localhost:8080/api/customer", newCustomer);
            console.log(result.data);
            navigate("/customers");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h1>Add a new Customer</h1>
            <form className='w-25' onSubmit={addCustomer}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="phone" />
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
