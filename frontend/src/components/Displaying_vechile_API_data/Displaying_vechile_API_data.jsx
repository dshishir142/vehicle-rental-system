import React, { useState } from 'react'
import { useEffect } from 'react'
import Userdata from "./UserData.jsx"

const Displaying_vechile_API_data = () => {

    const API = "http://Localhost:8000/api/car";

    const [user, setUsers] = useState([]);

    const fetchUser = async (url) => {
        try {

            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data)
            }
            console.log("okokok",data);
        }
        catch (e) {
            console.error(e)
        }

    }
    useEffect(() => {
        fetchUser(API)

    }, [])
  // Import statements and other component logic
  

return (
    <>
        <h1>Users Table</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>VechileType</th>
                    <th>company</th>
                    <th>model</th>
                    <th>price</th>
                    <th>imageurl</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                <Userdata user={user} />
            </tbody>
        </table>
    </>
);
}
export default Displaying_vechile_API_data
