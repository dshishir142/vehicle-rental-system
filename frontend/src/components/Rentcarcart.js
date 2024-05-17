import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import Stripe from "react-stripe-checkout";

import { UserContext } from "../App"

const Rentcarcart = () => {

    const { state, dispatch } = useContext(UserContext)

    const [cartUser, setCartUser] = useState([]);
    const [items, setItems] = useState([]);
    let itemsPrice, idOfRentedCar, reqHours;

    const getCartData = async () => {
        try {
            const res = await fetch('/getRentCartData', {
                method: 'GET',
            });

            const data = await res.json();
            console.log(data)
            setCartUser(data.userById)
            setItems(data.cartItems)


            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCartData();
    }, [])

    items.map(items => {
        itemsPrice = items.totalbill;
        idOfRentedCar = items.rentcarid;
        reqHours = items.requiredhours;
    })

    const handlePayMethod = (itemsPrice, token) => {
        return fetch("/stripeRentPay", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: token.id,
                amount: itemsPrice,
                idRentedCar: idOfRentedCar,
                hoursRequired: reqHours
            })
        })

    }

    const tokenHandler = (token) => {
        handlePayMethod(itemsPrice, token);
        updateDataBase();
    }


    const updateDataBase = () => {
        return fetch("/api/rentrequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                items,
                userId: cartUser
            })
        }).then(() => {
            getCartData();
            alert("Rent request sent")
        })
    }




    const Loginbutton = () => {

        if (state) {
            return <div>
                <button ><NavLink className="btn" to="/signout">logout</NavLink></button>
            </div>
        }
        else {
            return <div>
                <button ><NavLink className="btn" to="/signin">login</NavLink></button>

            </div>
        }
    }



    return (
        <>
            <header className="header">
                <div id="menu-btn" className="fas fa-bars"></div>
                <NavLink className="logo" to="/"> <span>VROOM</span> </NavLink>

                <nav className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/buycar">Sale Cars</NavLink>
                    <NavLink to="/rentcar">Rent Cars</NavLink>
                </nav>

                <div id="login-btn">
                    <Loginbutton />
                </div>
            </header>

            <div className='salecartMaindiv'>
                <div style={{
                    marginTop: "150px",
                }}>
                    {items.map((items) =>
                        <div className="salecartLidiv" key={items._id}>
                            <ul>
                                <li style={{ wordSpacing: "10px" }}>Brand: {items.brand} --- Model: {items.model} --- Hours: {items.requiredhours} --- RentPerHour: {items.rentperhour}Rs --- TotalBill: {items.totalbill}Rs   <button className="btn"><i className="fa fa-trash"></i></button></li>
                            </ul>
                        </div>

                    )}
                    <div style={{ padding: "30px", textAlign: "center" }}>
                        {items.length ? <>
                            <div className='form'>
                                <button className='button btn' onClick={updateDataBase}>Request for rent</button>
                            </div>

                            {/* <h2>Pay Through Credit / Debit Card 2</h2><br/>
                            <Stripe 
                                stripeKey = "pk_test_51Jyb5UBvc4Qazj8jy6qimLop4epxe5jziUD3ixj5ISycjjD6yYVGZhk688Pz9Lna32VTHbSHxRwkrvNNnnnr96P000M68u5jcd"
                                token = {tokenHandler}
                            /> */}</>
                            :<h3>No car rentals in cart</h3>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rentcarcart
