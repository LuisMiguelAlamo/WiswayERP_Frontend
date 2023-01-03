import { useEffect, useState } from 'react';
import axios from 'axios';

export const useRequest = (url) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        console.log(datos);
    }, [datos]);

    const create = async (newItem) => {
        try {
            // const result = await axios.post(url, newItem);
            setDatos([...datos, newItem]);
        } catch (error) {
            console.log("Error creating the new datos");
        }
    }

    const readAll = async () => {
        try {
            const result = await axios.get(url);
            setDatos(result.data);
        } catch (error) {
            console.log("Error getting the datos");
        }
    }

    const read = async (id) => {
        return datos.find(item => item.id === id);
    }

    const update = async (id, updatedItem) => {
        setDatos(datos.map(item => (item.id === id ? updatedItem : item)));
    }

    const remove = async (id) => {
        setDatos(datos.filter(item => item.id !== id));
    }

    return { datos, create, read, readAll, update, remove };
}
