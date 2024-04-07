import React, { useState } from 'react'
import { useEffect } from 'react'
import Userdata from "./UserData.jsx"

const Displaying_vechile_API_data = () => {

    const API = "https://jsonplaceholder.typicode.com/users";

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
                    <th>Name</th>
                    <th>Email</th>
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
