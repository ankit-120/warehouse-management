import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import FilterModal from '../components/FilterModal'
import WarehouseDataService from '../services/warehouse.service';
import Loader from '../components/Loader';
import SingleItem from '../components/SingleItem';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/itemSlice';
import { useSelector } from 'react-redux';

const Product = () => {

    const dispatch = useDispatch();
    const [items, setItems] = useState([]);

    const { cityList, space, clusterList } = useSelector((state) => state.filter);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const data = await WarehouseDataService.getAllItems();
        setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        dispatch(addItem(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    }

    if (items?.length === 0) {
        return (
            <Loader />
        )
    }

    const filterData = () => {
        let filteredData = items;
        if (cityList.length !== 0) {
            filteredData = filteredData.filter((data) => {
                for (let i = 0; i < cityList.length; i++) {
                    if (cityList[i] === data.city) {
                        return data;
                    }
                }
            })
        }

        if (clusterList.length !== 0) {
            filteredData = filteredData.filter((data) => {
                for (let i = 0; i < clusterList.length; i++) {
                    if (clusterList[i] === data.cluster) {
                        return data;
                    }
                }
            })
        }

        if (Object.keys(space).length !== 0) {
            console.log(space.low, space.high)
            filteredData = filteredData.filter((data) => (
                data.space_available >= space.low && data.space_available <= space.high
            ));
        }
        return filteredData;
    }

    return (
        <>
            <div className={style.mainDiv}>
                <div className={style.search}>
                    <div><FilterModal /></div>
                    <div>
                        <input type="text" placeholder='Search....' />
                    </div>
                </div>
                {
                    filterData().map((item, i) => (

                        <SingleItem item={item} key={i + 10} />

                    ))
                }
            </div>

            {console.log(items[0].id)}
        </>
    )
}

export default Product