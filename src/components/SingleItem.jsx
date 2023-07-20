import React from 'react'
import style from './SingleItem.module.css'

const SingleItem = ({ item }) => {
    return (
        <div className={style.main}>
            <table>
                <tbody>
                    <tr>
                        <td>Name : </td>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <td>Code : </td>
                        <td>{item.code}</td>
                    </tr>
                    <tr>
                        <td>City : </td>
                        <td>{item.city}</td>
                    </tr>
                    <tr>
                        <td>Space Available : </td>
                        <td>{item.space_available}</td>
                    </tr>
                    <tr>
                        <td>Type : </td>
                        <td>{item.type}</td>
                    </tr>
                    <tr>
                        <td>Cluster : </td>
                        <td>{item.cluster}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SingleItem