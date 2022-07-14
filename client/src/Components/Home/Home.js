import React, { useEffect, useState } from "react";
import "./Home.css"


function Home(props) {

    
    const [counter, setCounter] = useState(0)
    const [shoppingCartItems, setShoppingCartItems] = useState([]);
    const [shoppingCartTotal, setShoppingCartTotal] = useState(0);
    const [visibility, setVisibility] = useState("hidden");




    const tempArr = [
        {
            title: "Apples",
            price: "$" + 2,
            description: "Fresh apples",
            image: "https://imgs.search.brave.com/JdwGGA9Ceqooa1f5iwL5Xc_3CsPVFo1vhj3dW8i4zIs/rs:fit:1200:1048:1/g:ce/aHR0cHM6Ly9hNTcu/Zm94bmV3cy5jb20v/YTU3LmZveG5ld3Mu/Y29tL3N0YXRpYy5m/b3huZXdzLmNvbS9m/b3huZXdzLmNvbS9j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOS82/NDAvMzIwLzE4NjIv/MTA0OC9hcHBsZXNp/c3RvY2sxMDEuanBn/P3ZlPTEmdGw9MT92/ZT0xJnRsPTE",
        },
        {
            title: "Bananas",
            price: "$" + 4,
            description: "Delicious bananas",
            image: "https://imgs.search.brave.com/EAiqYG5go9kuoQK-3MrGhs58YM9Bq050KKAki-PtgfE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3RoZWds/b2JhbGZvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzAyL0NhdmVuZGlz/aC1CYW5hbmFzLmpw/Zw",
        },
        {
            title: "Oranges",
            price: "$" + 3,
            description: "Zesty oranges",
            image: "https://imgs.search.brave.com/epfDt2iEJy1mEchbp5lsCO9k9E38tLZQeK43mKL6eFw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tSHZlVnQyVV9Q/TkUvVFdyM3FDclE0/NEkvQUFBQUFBQUFC/ZzQvdkIwcFREQnF1/cVkvczE2MDAvT3Jh/bmdlcy5KUEc",
        },
        {
            title: "Kiwis",
            price: "$" + 8,
            description: "Tangy kiwis",
            image: "https://imgs.search.brave.com/sgm69z9vHdTLBRojGX24zUwt7O-y3lncKS9crvTxzS8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nb29k/c3RvY2sucGhvdG9z/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA3L1BpbGUtb2Yt/S2l3aXMuanBn",
        },
        {
            title: "Cherries",
            price: "$" + 6,
            description: "Sweet cherries",
            image: "https://imgs.search.brave.com/2CI4SF7blnRhh4c10a3IMP8Sk3ffJ7Pt3pYpHu0rAYs/rs:fit:1200:1066:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly1nMlFyX0lOaUhY/OC9VcTU5SlpRZHNl/SS9BQUFBQUFBQUNq/Zy9XZ0ZWQkRpcGU3/Zy9zMTYwMC9jaGVy/cmllcy5qcGc",
        },
        {
            title: "Durian",
            price: "$" + 12,
            description: "Stinky durian",
            image: "https://imgs.search.brave.com/Ag3HryuhLijPhmKUaRRszZhnbSHtKMfL6a-mge-tE40/rs:fit:1200:1063:1/g:ce/aHR0cHM6Ly93d3cu/ZHVyaWFuaGFydmVz/dHMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA1LzMu/anBn",
        },
        {
            title: "Dragon Fruit",
            price: "$" + 10,
            description: "Exquisite dragon fruit",
            image: "https://imgs.search.brave.com/hxH7eBL3iKxg-TqWI--kq2g9pNq6rXX7EUFSdwiv-Yg/rs:fit:900:600:1/g:ce/aHR0cHM6Ly9uYXR1/cmFsb24uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzEy/L2JpZ3N0b2NrLURy/YWdvbi1GcnVpdC1Q/aXRheWEtZ2Vvdy1N/YW4tODM5ODM5OTQu/anBn",
        },
        {
            title: "Pears",
            price: "$" + 3,
            description: "Ok pears",
            image: "https://imgs.search.brave.com/ae-YS8M0MhaMeka4o_h11_35x-ZJo9yceTV8Ymde5iw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dmVyeXdlbGxmaXQu/Y29tL3RobWIvYVVx/YVMwZHdBb1RObVIy/dlN3aFpwSHkyZTVr/PS81NzAweDM4MTUv/ZmlsdGVyczpmaWxs/KEZGREI1RCwxKS9H/ZXR0eUltYWdlcy0x/MjEzMzAyOTAtNTgy/ZGNiMzgzZGY3OGM2/ZjZhYzY3Zjk0Lmpw/Zw",
        },
    ]

    const handleCount = () => {
        // console.log(counter)
        setCounter(counter + 1)
    }

    const handlePay = () => {
        console.log("pay")
    }

    const handleVisibility = () => {
        if(visibility === "hidden"){
            setVisibility("visible");
        } else if(visibility === "visible"){
            setVisibility("hidden");
        }
    }

    const handleShoppingCart = (e) => {
        console.log(e.target.id)
    }

    const handlePrintArr = () => {
        return tempArr.map((item, index) => {
            return (
                <div key={index} id={index} className="Home__RenderedItems">
                    <img className="RenderedItems__Item" src={tempArr[index].image}></img>
                    <p className="RenderedItems__Item">{tempArr[index].title}</p>
                    <p className="RenderedItems__Item">{tempArr[index].price}</p>
                    <p className="RenderedItems__Item">{tempArr[index].description}</p>
                    <button onClick={handleShoppingCart}>Buy</button>
                </div>
            )
        })
    }

    const handleRenderShopingCart = () => {
        return tempArr.map((item, index) => {
            return (
                <div className="Home__ShoppingCart__Items">
                    <p className="ShoppingCartItems__Item">{tempArr[index].title}</p>
                    <p className="ShoppingCartItems__Item">{counter}</p>
                    <p className="ShoppingCartItems__Item">{tempArr[index].price}</p>
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
            <div className="Home__ShoppingCart" style={{ visibility:visibility }}>
                <p className="Home__ShoppingCart__AbortButton" onClick={handleVisibility}>&nbsp;X&nbsp;</p>
                {handleRenderShopingCart()}
                <p>Total: ${shoppingCartTotal}</p>
                <button onClick={handlePay}>Pay</button>
            </div>
        </div>
    )
}

export default Home;