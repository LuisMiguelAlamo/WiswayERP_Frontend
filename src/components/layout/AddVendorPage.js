import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AddVendorPage = () => {

    const navigate = useNavigate();

    const addVendor = async (e) => {
        try {
            e.preventDefault();
            const newVendor = {
                name: e.target.name.value,
                address: e.target.address.value,
                phone: e.target.phone.value,
                active: e.target.active.checked
            };

            const result = await axios.post("http://localhost:8080/api/vendor", newVendor);
            console.log(result.data);
            navigate("/vendors");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h1>Add a new Vendor</h1>
            <form className='w-25' onSubmit={addVendor}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="address" />
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
