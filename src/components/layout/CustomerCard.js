import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const CustomerCard = () => {

    const [checked, setChecked] = useState(false);
    const [customer, setCustomer] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCustomer();
    }, []);

    const getCustomer = async (req, res) => {
        try {
            const result = await axios.get("http://localhost:8080/api/customer/" + params.id);
            setCustomer(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const editCustomer = async (e) => {
        e.preventDefault();
        // let data = new FormData(e.target);

        const newCustomer = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            active: e.target.active.checked
        };
        /* data.forEach((value, key) => {
            newCustomer[key] = value;
        }); */
        try {
            const result = await axios.put("http://localhost:8080/api/customer/" + params.id, newCustomer);
            console.log(result.data);
            console.log(e.target.active.value);
            navigate(`/customers`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    const saveCustomer = (e) => {
        e.preventDefault();
    }



    return (
        <div className='customer-card'>

            <div className='card mb-5'>
                <div className="card">
                    <h5 className="card-header">{customer.name}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{customer.email}</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{customer.phone}</h5>
                    </div>
                </div>
            </div>

            <form className='w-25' onSubmit={editCustomer}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" defaultValue={customer.name} name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={customer.email} name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={customer.phone} name="phone" />
                </div>
                <div className="mb-3 form-check">
                    {
                        !customer.active ? <input type="checkbox" className="form-check-input" id="exampleCheck1" name='active' value={checked} onChange={handleChange} />
                            : <input type="checkbox" className="form-check-input" id="exampleCheck1" name='active' checked value={checked} onChange={handleChange} />
                    }

                    <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}
