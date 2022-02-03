import React, { useState } from 'react'
import Axios from 'axios';
import "./orders.css"
import { useEffect } from 'react';
export default function Orders() {
    const [order, setOrder] = useState([]);
    const [del, setDelete] = useState([]);


    // fetch order from the backend

    useEffect(() => {


        const Test = async () => {
            try {
                const ORDERS = await Axios.get("http://localhost:3001/getTest");
                // console.log(ORDER) 
                setOrder(ORDERS.data)
            } catch (error) {
                console.log(error)
            }
        }

        Test();

    }, [])

    console.log(order);

    // handle delete function
    const handleDelete = async (id) => {
        try {
            const Delete = await Axios.delete(`http://localhost:3001/deleteOrder/${id}`);
            console.log(Delete);
            // setting filter
            setDelete(del.filter(v => v.id !== id));
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="orders pt-3">


            <table className="table table-hover table1 " border="2" bgcolor="#ffffff">
                <thead>""
                    <tr className=" topic ">
                        <th>No</th>
                        <th>fullname</th>
                        <th>location</th>
                        <th>phone number</th>
                        <th>total amount</th>
                        <th>delete</th>


                    </tr>
                </thead>
                <tbody>

                    {order.map((ord) => {
                        return (
                            <tr key={ord.id}>
                                <td>
                                    {ord.id}
                                </td>
                                <td>
                                    {ord.fullname}
                                </td>
                                <td>
                                    {ord.location}
                                </td>
                                <td>
                                    {ord.phoneno}
                                </td>
                                <td>
                                    {ord.totalprice}ksh
                                </td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => handleDelete(ord.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })}





                </tbody>
            </table>





        </div>

    )
}
