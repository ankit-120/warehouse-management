import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import FilterModal from '../components/FilterModal'
import WarehouseDataService from '../services/warehouse.service';
import Loader from '../components/Loader';
import SingleItem from '../components/SingleItem';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/itemSlice';
import { useSelector } from 'react-redux';

const Product = () => {

    //state for search
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    //state to store warehouses fetched from db
    const [items, setItems] = useState([]);

    //from store
    const { cityList, space, clusterList } = useSelector((state) => state.filter);

    useEffect(() => {
        fetchItems();
    }, [])

    //getting data from db
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

    //filter data according to choise
    const filterData = () => {
        let filteredData = items;
        //based on city
        if (cityList.length !== 0) {
            filteredData = filteredData.filter((data) => {
                for (let i = 0; i < cityList.length; i++) {
                    if (cityList[i] === data.city) {
                        return data;
                    }
                }
            })
        }

        // based on cluster 
        if (clusterList.length !== 0) {
            filteredData = filteredData.filter((data) => {
                for (let i = 0; i < clusterList.length; i++) {
                    if (clusterList[i] === data.cluster) {
                        return data;
                    }
                }
            })
        }

        //based on space availablity
        if (Object.keys(space).length !== 0) {
            console.log(space.low, space.high)
            filteredData = filteredData.filter((data) => (
                data.space_available >= space.low && data.space_available <= space.high
            ));
        }

        //based on search querry
        if (search.length !== 0) {
            filteredData = filteredData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase())
                || data.city.toLowerCase().includes(search.toLowerCase()))
        }
        return filteredData;
    }

    return (
        <>
            <div className={style.mainDiv}>
                <div className={style.search}>
                    <div><FilterModal /></div>
                    <div>
                        <input
                            type="text"
                            placeholder='Search....'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                {
                    filterData().map((item, i) => (
                        <SingleItem item={item} key={i + 10} />
                    ))
                }
            </div>
        </>
    )
}

export default Product