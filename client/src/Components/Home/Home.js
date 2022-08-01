import React, { useEffect, useState } from "react";
import "./Home.css"
import myApi from "../../Api/Api";
// import Admin from "../Admin/Admin";


function Home(props) {

    const [renderer, setRenderer] = useState(0)
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [visibility, setVisibility] = useState("hidden");

    const handlePay = async () => {
        cartItems.push({
            total: cartTotal
        })
        try {
            const newPurchase = {
                purchase: cartItems
            };

            await myApi.post('/purchases', newPurchase)
            
        } catch (err) {
            console.log(err);
        };

        for(let i = cartItems.length; i > 0; i--){
            cartItems.pop()
        };

        setCartTotal(0);
        setItemCount(0);
        setRenderer(renderer + 1);
        setVisibility("hidden");
    }

    const handleVisibility = () => {
        if (visibility === "hidden") {
            setVisibility("visible");
        } else if (visibility === "visible") {
            setVisibility("hidden");
        };
    };


    const handleShoppingCart = (e) => {
        const id = e.target.id;

        if (cartItems.length !== 0) {
            let isItemFound = false;
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    cartItems[i].amount++;
                    const multi = (a, b) => {
                        return a * b;
                    }
                    cartItems[i].price = multi(props.items[id].price, cartItems[i].amount)
                    isItemFound = true;
                    break;
                }
            }
            if (!isItemFound) {
                cartItems.push({
                    title: props.items[id].title,
                    amount: 1,
                    price: props.items[id].price,
                    id: id,
                });
            }

            setRenderer(renderer + 1);
            setItemCount(itemCount + 1);
        } else {
            cartItems.push({
                title: props.items[id].title,
                title: props.items[id].title,
                amount: 1,
                price: props.items[id].price,
                id: id,
            })
            setItemCount(itemCount + 1)
            setRenderer(renderer + 1);
        }
        const add = (a, b) => {
            return a + b;
        }
        setCartTotal(add(Number(cartTotal), Number(props.items[id].price)))
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
        return cartItems.map((item, index) => {
            return (
                <div className="Home__ShoppingCart__Items">
                    <div className="renderer">{renderer}</div>
                    <p className="cartItems__Item">{cartItems[index].amount}</p>
                    <p className="cartItems__Item">{cartItems[index].title}</p>
                    <p className="cartItems__Item">${cartItems[index].price}</p>
                </div>
            )
        })
    }

    return (
        <div className="Home">
            <button className="Home__ShoppingCart__Button" onClick={handleVisibility}><h3>Shopping Cart <span>&nbsp;{itemCount}&nbsp;</span></h3></button>
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
                <p>Total: ${cartTotal}</p>
                <button onClick={handlePay}>Pay</button>
            </div>
        </div>
    )
}

export default Home;