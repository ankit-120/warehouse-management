import React, { useState } from 'react';
// import WarehouseDataService from './services/warehouse.service';
import WarehouseDataService from '../services/warehouse.service';

const WarehouseForm = () => {
    // Initialize state to store form data
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        id: '',
        city: '',
        space_available: '',
        type: '',
        cluster: '',
        is_registered: false,
        is_live: false,
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = {
            name: formData.name,
            code: formData.code,
            id: formData.id,
            city: formData.city,
            space_available: formData.space_available,
            type: formData.type,
            cluster: formData.cluster,
            is_registered: formData.is_registered,
            is_live: formData.is_live,
        }
        console.log(newData);
        await WarehouseDataService.addItem(newData);
        setFormData({
            name: '',
            code: '',
            id: '',
            city: '',
            space_available: '',
            type: '',
            cluster: '',
            is_registered: false,
            is_live: false,
        });
    };

    return (
        <div>
            <h2>Warehouse Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Code:</label>
                    <input
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>ID:</label>
                    <input
                        type="number"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Space Available:</label>
                    <input
                        type="number"
                        name="space_available"
                        value={formData.space_available}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cluster:</label>
                    <input
                        type="text"
                        name="cluster"
                        value={formData.cluster}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Is Registered:</label>
                    <input
                        type="checkbox"
                        name="is_registered"
                        checked={formData.is_registered}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Is Live:</label>
                    <input
                        type="checkbox"
                        name="is_live"
                        checked={formData.is_live}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default WarehouseForm;
