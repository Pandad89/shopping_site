import { PromiseProvider } from "mongoose";
import React, { useEffect, useState } from "react";
import "./Stats.css"

function Stats(props) {

    const filteredData = props.filteredData;
    const totals = props.totals;
    let refinedPurchases = [];
    let refinedTotals = [];

    const [topSold, setTopSold] = useState([]);
    const [topUnique, setTopUnique] = useState([]);
    const [dailySales, setDailySales] = useState([]);

    const handleTopFive = () => {
        for (let i = 0; i < filteredData.length; i++) {
            if (refinedPurchases.length !== 0) {
            let isItemFound = false;

            } else {
                refinedPurchases.push({
                    title: filteredData[i].title,
                    amount: filteredData[i].amount,
                    id: filteredData[i].id,
                })
            }
        }
    }

    const handleTopUnique = () => {

    }

    const handleDailySales = () => {

    }

    const handleLog = () => {
        console.log('unifiedPurchaseData');
        console.log(props.unifiedPurchaseData);
        console.log('purchases');
        console.log(props.purchases);
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