import React, { useEffect, useState } from "react";
import "./Stats.css"

function Stats(props) {


    // const handlePrintArr = () => {
    //     for (let i = 0; i < props.purchases.length; i++) {
    //         return props.purchases[i].map((item, index) => {
    //             return (
    //                 <div key={index} id={index} className="Stats__RenderedItems">
    //                     <p className="RenderedItems__Item">dsa</p>
    //                     {/* <p className="RenderedItems__Item">${props.purchases[index].purchase[index].amount}</p> */}
    //                     {/* <p className="RenderedItems__Item">{props.purchases[index].purchase[index].price}</p> */}
    //                 </div>
    //             )
    //         })
    //     }
    // }





    return (
        <div className="Stats">
            <button onClick={() => console.log(props.purchases)}>LOG</button>
            <div className="Stats__Cards">
                <div className="Stats__CardOne">
                    <h2>Top 5 Sold Proucts</h2>
                    {/* {handlePrintArr} */}
                </div>
                <div className="Stats__CardTwo">
                    <h2>Top 5 Unique Sold products</h2>
                    {/* {handlePrintArr} */}
                </div>
                <div className="Stats__CardThree">
                    <h2>Daily Sales for Past 5 Days</h2>
                    {/* {handlePrintArr} */}
                </div>
            </div>
        </div>
    )
}

export default Stats;