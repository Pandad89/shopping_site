import { PromiseProvider } from "mongoose";
import React, { useEffect, useState } from "react";
import "./Stats.css"

function Stats(props) {

    const filteredData = props.filteredData;
    const totals = props.totals;
    let refinedPurchases = [];
    let refinedTotals = [];

    const handleTopFive = () => {
        // if (cartItems.length !== 0) {
        //     let isItemFound = false;
        //     for (let i = 0; i < cartItems.length; i++) {
        //         if (cartItems[i].id === id) {
        //             cartItems[i].amount++;
        //             const multi = (a, b) => {
        //                 return a * b;
        //             }
        //             cartItems[i].price = multi(props.items[id].price, cartItems[i].amount)
        //             isItemFound = true;
        //             break;
        //         }
        //     }
        //     if (!isItemFound) {
        //         cartItems.push({
        //             title: props.items[id].title,
        //             amount: 1,
        //             price: props.items[id].price,
        //             id: id,
        //         });
        //     }

        //     setRenderer(renderer + 1);
        //     setItemCount(itemCount + 1);
        // } else {
        //     cartItems.push({
        //         title: props.items[id].title,
        //         amount: 1,
        //         price: props.items[id].price,
        //         id: id,
        //     })
        //     setItemCount(itemCount + 1)
        //     setRenderer(renderer + 1);
        // }
    }

    const handleTopFiveUnique = () => {

    }

    const dailySales = () => {

    }

    const handleLog = () => {
        console.log('filteredData');
        console.log(filteredData);
        console.log('totals');
        console.log(totals);
        console.log('refinedPurchases');
        console.log(refinedPurchases);
        console.log('refinedTotals');
        console.log(refinedTotals);


    }

    return (
        <div className="Stats">
            <button onClick={handleLog}>LOG</button>
            <div className="Stats__Cards">
                <div className="Stats__CardOne">
                    <p>Top 5 Sold Proucts</p>
                    <p>{handleTopFive()}</p>
                    {/* <ul>
                        <li>{rawData[3].purchase[0].title} - {rawData[3].purchase[0].amount}</li>
                        <li>{rawData[3].purchase[1].title} - {rawData[3].purchase[1].amount}</li>
                        <li>{rawData[3].purchase[2].title} - {rawData[3].purchase[2].amount}</li>
                        <li>{rawData[3].purchase[3].title} - {rawData[3].purchase[3].amount}</li>
                        <li>{rawData[3].purchase[4].title} - {rawData[3].purchase[4].amount}</li>
                    </ul> */}
                </div>
                <div className="Stats__CardTwo">
                    <p>Top 5 Unique Sold products</p>
                    {/* <ul>
                        <li>{rawData[3].purchase[0].title} - {rawData[3].purchase[0].amount}</li>
                        <li>{rawData[3].purchase[1].title} - {rawData[3].purchase[1].amount}</li>
                        <li>{rawData[3].purchase[2].title} - {rawData[3].purchase[2].amount}</li>
                        <li>{rawData[3].purchase[3].title} - {rawData[3].purchase[3].amount}</li>
                        <li>{rawData[3].purchase[4].title} - {rawData[3].purchase[4].amount}</li>
                    </ul> */}
                </div>
                <div className="Stats__CardThree">
                    <p>Daily Sales for Past 5 Days</p>
                    {/* <ul>
                        <li>{date()} - {rawData[3].purchase[0].title}</li>
                        <li>{date()} - {rawData[3].purchase[1].title}</li>
                        <li>{date()} - {rawData[3].purchase[2].title}</li>
                        <li>{date()} - {rawData[3].purchase[3].title}</li>
                        <li>{date()} - {rawData[3].purchase[4].title}</li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Stats;