import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const VendorCard = () => {

    const [checked, setChecked] = useState(false);
    const [vendor, setVendor] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getVendor();
    }, []);

    const getVendor = async (req, res) => {
        try {
            const result = await axios.get("http://localhost:8080/api/vendor/" + params.id);
            setVendor(result.data);
            setChecked(result.data.active);
            console.log(result.data.active);
        } catch (error) {
            console.log(error);
        }
    }

    const editVendor = async (e) => {
        e.preventDefault();
        // let data = new FormData(e.target);

        const newVendor = {
            name: e.target.name.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            active: checked
        };
        /* data.forEach((value, key) => {
            newVendor[key] = value;
        }); */
        try {
            const result = await axios.put("http://localhost:8080/api/vendor/" + params.id, newVendor);
            console.log(result.data);
            navigate(`/vendors`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }


    return (
        <div className='main-card'>
            <h1>Vendor Card</h1>
            <div className='card mb-5'>
                <div className="card">
                    <h5 className="card-header">{vendor.name}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{vendor.address}</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{vendor.phone}</h5>
                    </div>
                </div>
            </div>

            <form className='w-25' onSubmit={editVendor}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" defaultValue={vendor.name} name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={vendor.address} name="address" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={vendor.phone} name="phone" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name='active' checked={checked} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}
