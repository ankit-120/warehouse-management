import React, { useState } from 'react';
import style from './FilterMenu.module.css';
import { useSelector, useDispatch } from 'react-redux'
import FilterItem from './FilterItem';
import { addCity, removeCity, addCluster, removeCluster } from '../redux/filterSlice';
import FilterOnSpace from './FilterOnSpace';
import { clearFilter } from '../redux/filterSlice';

const FilterMenu = () => {

    const dispatch = useDispatch();

    //state to check active menu
    const [activeMenuItem, setActiveMenuItem] = useState('home');

    //getting all the warehouse from store
    const { items } = useSelector((state) => state.item);
    //getting cityList and clusterList from store
    const { cityList, clusterList } = useSelector((state) => state.filter)

    //array of all cities
    const setCities = () => {
        return [...new Set(items.map((item) => item.city))];
    }
    //array of all clusters
    const setClusters = () => {
        return [...new Set(items.map((item) => item.cluster))];
    }

    const handleMenuClick = (item) => {
        setActiveMenuItem(item);
    };

    return (
        <div className={style.app}>
            <div className={style.leftMenu}>
                <div
                    className={`${style.menuItem} ${activeMenuItem === 'city' ? style.active : ''}`}
                    onClick={() => handleMenuClick('city')}
                >
                    City
                </div>
                <div
                    className={`${style.menuItem} ${activeMenuItem === 'cluster' ? style.active : ''}`}
                    onClick={() => handleMenuClick('cluster')}
                >
                    Cluster
                </div>
                <div
                    className={`${style.menuItem} ${activeMenuItem === 'space' ? style.active : ''}`}
                    onClick={() => handleMenuClick('space')}
                >
                    Space Availablity
                </div>
                <button className={style.btn}
                    onClick={() => dispatch(clearFilter())}>
                    Clear Filter
                </button>
            </div>

            <div className={style.content}>
                {activeMenuItem === 'city' && <div>
                    <FilterItem filterList={setCities()} filterCategory={cityList} add={addCity} remove={removeCity} />
                </div>}
                {activeMenuItem === 'cluster' && <div>
                    <FilterItem filterList={setClusters()} filterCategory={clusterList} add={addCluster} remove={removeCluster} />
                </div>}
                {activeMenuItem === 'space' && <div>
                    <FilterOnSpace />
                </div>}
            </div>
        </div>
    );
};

export default FilterMenu