import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export const ItemCard = () => {

    const [checked, setChecked] = useState(false);
    const [item, setItem] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getItem();
    }, []);

    const getItem = async (req, res) => {
        try {
            const result = await axios.get("http://localhost:8080/api/item/" + params.id);
            setItem(result.data);
            setChecked(result.data.active);
        } catch (error) {
            console.log(error);
        }
    }

    const editItem = async (e) => {
        e.preventDefault();
        // let data = new FormData(e.target);

        const newItem = {
            name: e.target.name.value,
            price: e.target.price.value,
            active: checked
        };
        /* data.forEach((value, key) => {
            newItem[key] = value;
        }); */
        try {
            const result = await axios.put("http://localhost:8080/api/item/" + params.id, newItem);
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



    return (
        <div className='item-card'>
            <h1>Item Card</h1>
            <div className='card mb-5'>
                <div className="card">
                    <h5 className="card-header">{item.name}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{item.price}</h5>
                    </div>
                </div>
            </div>

            <form className='w-25' onSubmit={editItem}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" defaultValue={item.name} name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={item.price} name="price" />
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
