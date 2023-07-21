import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSpaceLimit } from '../redux/filterSlice';
import styles from './FilterOnSpace.module.css';

const FilterOnSpace = () => {

    const dispatch = useDispatch();
    const { space } = useSelector((state => state.filter));
    console.log(space);

    const [limit, setLimit] = useState({
        low: space.low || 0,
        high: space.high || 99999999
    });

    const handleSubmit = () => {
        if (limit.low === '' || limit.high === '') {
            alert('Please set the limits')
            return;
        }
        dispatch(setSpaceLimit(limit));
    }

    const handleReset = () => {
        setLimit({
            low: 0,
            high: 99999999
        })
        dispatch(setSpaceLimit({ low: 0, high: 99999999 }));
    }

    return (
        <div className={styles.container}>
            <div className={styles['space-inputs']}>
                <div>
                    <label htmlFor="low">Set Lower Limit : </label>
                    <input
                        type="number"
                        id='low'
                        value={limit.low}
                        onChange={(e) => setLimit({ ...limit, low: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="low">Set Upper Limit : </label>
                    <input
                        type="number"
                        id='low'
                        value={limit.high}
                        onChange={(e) => setLimit({ ...limit, high: e.target.value })} />
                </div>
            </div>
            <div className={styles.buttons}>
                <button onClick={handleSubmit}>
                    Set Limit
                </button>
                <button onClick={handleReset}>
                    Reset Limit
                </button>

            </div>
        </div>
    )
}

export default FilterOnSpace