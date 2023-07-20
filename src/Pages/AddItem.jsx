import React, { useState } from 'react';
import styles from './addItem.module.css';
import WarehouseDataService from '../services/warehouse.service';

const initialFormData = {
    name: "",
    code: "",
    id: 0,
    city: "",
    space_available: 0,
    type: "",
    cluster: "",
    is_registered: false,
    is_live: false,
};

function AddItem() {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let flag = false;
        if (Object.values(formData).forEach((val) => {
            if (val === '') {
                flag = true;
                return;
            }
        }));
        if (flag) {
            alert("Fill all the fields");
            return;
        }
        console.log(formData);

        //adding to db
        await WarehouseDataService.addItem(formData)
            .then(() => {
                alert("Data added successfully");
                setFormData(initialFormData);
            })
            .catch((error) => {
                alert("Error adding data. Try again later", error)
            })

    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label>Code:</label>
                <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                />

                <label>ID:</label>
                <input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                />

                <label>City:</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />

                <label>Space Available:</label>
                <input
                    type="number"
                    name="space_available"
                    value={formData.space_available}
                    onChange={handleChange}
                />

                <label>Type:</label>
                <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                />

                <label>Cluster:</label>
                <input
                    type="text"
                    name="cluster"
                    value={formData.cluster}
                    onChange={handleChange}
                />

                <label>Is Registered:</label>
                <input
                    type="checkbox"
                    name="is_registered"
                    checked={formData.is_registered}
                    onChange={handleChange}
                />

                <label>Is Live:</label>
                <input
                    type="checkbox"
                    name="is_live"
                    checked={formData.is_live}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddItem;
