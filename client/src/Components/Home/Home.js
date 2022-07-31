import React, { useEffect, useState } from "react";
import "./Home.css"
import Admin from "../Admin/Admin";


function Home(props) {

    const [items, setItems] = useState([]);
    const [counter, setCounter] = useState(0)
    const [renderer, setRenderer] = useState(0)
    const [shoppingCartItems, setShoppingCartItems] = useState([]);
    const [shoppingCartItemCount, setShoppingCartItemCount] = useState(0);
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

        if(!shoppingCartItems[id]) {
            shoppingCartItems.push({
                title: props.items[id].title,
                amount: 1,
                price: props.items[id].price,
            })
        }
        if(shoppingCartItems) {
            shoppingCartItems[id].amount = shoppingCartItems[id].amount + 1            
        }


            setShoppingCartItemCount(shoppingCartItemCount + 1)



        console.log(shoppingCartItems)
        console.log(shoppingCartItems.indexOf('Cherries'))
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
        return shoppingCartItems.map((item, index) => {
            return (
                <div className="Home__ShoppingCart__Items">
                    <div className="renderer">{renderer}</div>
                    <p className="ShoppingCartItems__Item">{shoppingCartItems[index].amount}</p>
                    <p className="ShoppingCartItems__Item">{shoppingCartItems[index].title}</p>
                    <p className="ShoppingCartItems__Item">${shoppingCartItems[index].price}</p>
                </div>
            )
        })
    }

    return (
        <div className="Home">
            <button className="Home__ShoppingCart__Button" onClick={handleVisibility}><h3>Shopping Cart <span>&nbsp;{shoppingCartItemCount}&nbsp;</span></h3></button>
            <div className="Home__List">
                {handlePrintArr()}
            </div>
            <div className="Home__ShoppingCart" style={{ visibility: visibility }}>
                <p className="Home__ShoppingCart__AbortButton" onClick={handleVisibility}>&nbsp;X&nbsp;</p>
                <div className="Home__ShoppingCart__Items">
                    <p>Item</p>
                    <p>Amount</p>
                    <p>Price</p>
                </div>
                {handleRenderShopingCart()}
                <p>Total: ${shoppingCartTotal}</p>
                <button onClick={handlePay}>Pay</button>
            </div>
        </div>
    )
}

export default Home;