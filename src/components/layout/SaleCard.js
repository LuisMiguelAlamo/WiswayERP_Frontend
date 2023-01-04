import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const SaleCard = () => {

    const [checked, setChecked] = useState(false);
    const [sale, setSale] = useState({});
    const [items, setItems] = useState([]);
    const [customer, setCustomer] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSale();
        getSaleItems();
        getSaleCustomer();
    }, []);

    const getSale = async (req, res) => {
        try {
            const result = await axios.get("http://localhost:8080/api/sale/" + params.id);
            setSale(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getSaleItems = async (req, res) => {
        try {
            const result = await axios.get("http://localhost:8080/api/sale/" + params.id + "/items");
            setItems(result.data);
        } catch (error) {
            console.log(error);
        }
    }


    const getSaleCustomer = async (req, res) => {
        try {
            const result = await axios.get("http://localhost:8080/api/sale/" + params.id + "/customer");
            setCustomer(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const editSale = async (e) => {
        e.preventDefault();
        // let data = new FormData(e.target);

        const newSale = {
            total_sale: e.target.total.value,
            sale_date: e.target.date.value,
            active: e.target.active.checked
        };
        /* data.forEach((value, key) => {
            newSale[key] = value;
        }); */
        try {
            const result = await axios.put("http://localhost:8080/api/sale/" + params.id, newSale);
            console.log(result.data);
            console.log(e.target.active.value);
            navigate(`/items`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    const saveItem = (e) => {
        e.preventDefault();
    }



    return (
        <div className='sale-card'>

            <div className='card mb-5'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Date: {sale.sale_date}</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Customer: {customer.name}</h5>
                        <h5 className="card-title">Email: {customer.email}</h5>
                    </div>

                    {
                        items.map((item) => {
                            return (
                                <div className="card mx-2 w-50 mb-2">
                                    <h5 className="card-title">Item Name: {item.name}</h5>
                                    <h5 className="card-title">Item price: {item.price}</h5>
                                </div>
                            )
                        })
                    }

                    <h5 className="card-header">Total sale: {sale.total_sale}</h5>
                </div>
            </div>

            <form className='w-25' onSubmit={editSale}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" defaultValue={sale.total_sale} name="total" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="date" className="form-control" id="exampleInputEmail1" defaultValue={sale.sale_date} name="date" />
                </div>
                <div className="mb-3 form-check">
                    {
                        !sale.active ? <input type="checkbox" className="form-check-input" id="exampleCheck1" name='active' />
                            : <input type="checkbox" className="form-check-input" id="exampleCheck1" name='active' checked />
                    }

                    <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}
