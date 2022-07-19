import React, { useEffect, useState } from "react";
import "./Home.css"


function Home(props) {

    const [renderer, setRenderer] = useState(0);
    const [counter, setCounter] = useState(0)
    const [shoppingCartItems, setShoppingCartItems] = useState([]);
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
        console.log(e.target.id)
    }

    const handlePrintArr = () => {
        // return tempArr.map((item, index) => {
        //     return (
        //         <div key={index} id={index} className="Home__RenderedItems">
        //             <img className="RenderedItems__Item" src={tempArr[index].image}></img>
        //             <p className="RenderedItems__Item">{tempArr[index].title}</p>
        //             <p className="RenderedItems__Item">{tempArr[index].price}</p>
        //             <p className="RenderedItems__Item">{tempArr[index].description}</p>
        //             <button onClick={handleShoppingCart}>Buy</button>
        //         </div>
        //     )
        // })
        return props.items.map((item, index) => {
            return (
                <div key={index} id={index} className="Home__RenderedItems">
                    <img className="RenderedItems__Item" src={props.items[index].image}></img>
                    <p className="RenderedItems__Item">{props.items[index].title}</p>
                    <p className="RenderedItems__Item">{props.items[index].price}</p>
                    <p className="RenderedItems__Item">{props.items[index].description}</p>
                    <button onClick={handleShoppingCart}>Buy</button>
                </div>
            )
        })
    }

    const handleRenderShopingCart = () => {
        return props.items.map((item, index) => {
            return (
                <div className="Home__ShoppingCart__Items">
                    <p className="ShoppingCartItems__Item">{props.items[index].title}</p>
                    <p className="ShoppingCartItems__Item">{counter}</p>
                    <p className="ShoppingCartItems__Item">{props.items[index].price}</p>
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