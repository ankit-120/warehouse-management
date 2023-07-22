import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './SingleItemPage.module.css';
import WarehouseDataService from '../services/warehouse.service';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const SingleItemPage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [item, setItem] = useState({});
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = async () => {
        const data = await WarehouseDataService.getItem(id);
        setItem(data.data());
    }

    const handleUpdate = async () => {
        await WarehouseDataService.updateItem(id, item)
            .then(() => {
                alert("Data updated successfully");
            })
            .catch((error) => {
                alert("Error updating data. Try again later", error)
            })
    }

    if (Object.keys(item).length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <div className={style.container}>
            <h1>Warehouse Details</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="text"
                                    name="name"
                                    value={item.name}
                                    onChange={() => setItem({ ...item, name: item.name })}
                                /> : item.name
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Code:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="text"
                                    name="code"
                                    value={item.code}
                                    onChange={(e) => setItem({ ...item, code: e.target.value })}
                                /> : item.code
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>ID:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="number"
                                    name="id"
                                    value={item.id}
                                    onChange={(e) => setItem({ ...item, id: e.target.value })}
                                /> : item.id
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="text"
                                    name="city"
                                    value={item.city}
                                    onChange={(e) => setItem({ ...item, city: e.target.value })}
                                /> : item.city
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Space Available:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="number"
                                    name="space_available"
                                    value={item.space_available}
                                    onChange={(e) => setItem({ ...item, space_available: e.target.value })}
                                /> : item.space_available
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Type:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="text"
                                    name="type"
                                    value={item.type}
                                    onChange={(e) => setItem({ ...item, type: e.target.value })}
                                /> : item.type
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Cluster:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="text"
                                    name="cluster"
                                    value={item.cluster}
                                    onChange={(e) => setItem({ ...item, cluster: e.target.value })}
                                /> : item.cluster
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Is Registered:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="checkbox"
                                    name="is_registered"
                                    value={item.is_registered}
                                    checked={item.is_registered ? true : false}
                                    onChange={(e) => setItem({ ...item, is_registered: !item.is_registered })}
                                /> : item.is_registered ? 'True' : "False"
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Is Live:</td>
                        <td>
                            {
                                isClicked ? <input
                                    type="checkbox"
                                    name="is_live"
                                    value={item.is_live}
                                    checked={item.is_live ? true : false}
                                    onChange={(e) => setItem({ ...item, is_live: !item.is_live })}
                                /> : item.is_live ? 'True' : "False"
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={style.btnDiv}>
                <button className={style.btn} onClick={() => {
                    setIsClicked(!isClicked)
                    isClicked ? handleUpdate() : ''
                }}>
                    {isClicked ? 'Save' : 'Update Warehouse'}
                </button>
                <button className={style.btn}
                    onClick={() => navigate('/')}>
                    Back
                </button>

            </div>
        </div>
    );
}

export default SingleItemPage