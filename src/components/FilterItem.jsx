import React from 'react'
import { useDispatch } from 'react-redux'

const FilterItem = ({ filterList, filterCategory, add, remove }) => {

    const dispatch = useDispatch();

    console.log(filterCategory)
    return (
        <div>
            <ul>
                {
                    filterList.map((item, i) => (
                        <li key={i + 10}>
                            <input
                                type="checkbox"
                                id={item}
                                value={item}
                                checked={filterCategory.includes(item)}
                                onChange={(e) => filterCategory.includes(item) ? dispatch(remove(item)) : dispatch(add(item))} />
                            <label htmlFor={item}>{item}</label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterItem