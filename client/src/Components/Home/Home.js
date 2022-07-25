import React, { useEffect, useState } from "react";
import "./Home.css"
import Admin from "../Admin/Admin";


function Home(props) {

    const [items, setItems] = useState([]);
    const [counter, setCounter] = useState(0)
    let shoppingCartItems = [];
    const [shoppingCartItemCount, setShoppingCartItemCount] = useState([]);
    const [shoppingCartTotal, setShoppingCartTotal] = useState(0);
    const [visibility, setVisibility] = useState("hidden");

    const handleCount = () => {
        // console.log(counter)
        setCounter(counter + 1)
    }

    const handlePay = () => {
        console.log("pay")
    }

    const handleVisibility = () => {
        if (visibility === "hidden") {
            setVisibility("visible");
        } else if (visibility === "visible") {
            setVisibility("hidden");
        }
    }

    const handleShoppingCart = (e) => {
        const id = e.target.id;

        if (shoppingCartItems == false) {
            shoppingCartItems.push({
                title: props.items[id].title,
                amount: 1,
                price: props.items[id].price,
            })
        } else {
            shoppingCartItems.push({
                title: props.items[id].title,
                amount: 1,
                price: props.items[id].price,
            })
        }

        console.log(shoppingCartItems)
    }

    const handlePrintArr = () => {
        return props.items.map((item, index) => {
            return (
                <div key={index} id={index} className="Home__RenderedItems">
                    <img className="RenderedItems__Item" src={props.items[index].image}></img>
                    <p className="RenderedItems__Item">{props.items[index].title}</p>
                    <p className="RenderedItems__Item">${props.items[index].price}</p>
                    <p className="RenderedItems__Item">{props.items[index].description}</p>
                    <button key={index} id={index} onClick={handleShoppingCart}>Buy</button>
                </div>
            )
        })
    }

    const handleRenderShopingCart = () => {
        return props.items.map((item, index) => {
            return (
                <div className="Home__ShoppingCart__Items">
                    <p className="ShoppingCartItems__Item">{shoppingCartItems}</p>
                    <p className="ShoppingCartItems__Item">{shoppingCartItems}</p>
                    <p className="ShoppingCartItems__Item">{ }</p>
                </div>
            )
        })
    }

    return (
        <div className="Home">
            <button className="Home__ShoppingCart__Button" onClick={handleVisibility}><h3>Shopping Cart <span>&nbsp;{counter}&nbsp;</span></h3></button>
            <div className="Home__List">
                {handlePrintArr()}
            </div>
            <div className="Home__ShoppingCart" style={{ visibility: visibility }}>
                <p className="Home__ShoppingCart__AbortButton" onClick={handleVisibility}>&nbsp;X&nbsp;</p>
                {handleRenderShopingCart()}
                <p>Total: ${shoppingCartTotal}</p>
                <button onClick={handlePay}>Pay</button>
            </div>
        </div>
    )
}

export default Home;