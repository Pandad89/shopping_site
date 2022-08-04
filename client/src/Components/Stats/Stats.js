import { PromiseProvider } from "mongoose";
import React, { useEffect, useState } from "react";
import "./Stats.css"

function Stats(props) {

    const purchases = props.purchases;

    const date = () => {
        const year = purchases[0].timePosted.slice(0, 4);
        const month = purchases[0].timePosted.slice(5, 7);
        const day = purchases[0].timePosted.slice(8, 10);

        return `${day}.${month}.${year}`;
    }

    const handleTopFive = () => {



    }

    const handleTopFiveUnique = () => {

    }

    const dailySales = () => {

    }





    const handleLog = () => {
        // console.log(purchases);
        // console.log(date());
        // console.log(props.unifiedPurchaseData);
        console.log(props.filteredData);

    }
    // data.push(...purchases[i].purchase)

    //  const handlePrintArr = () => {
    //     return rawData.map((item, index) => {
    //         return (
    //             <div key={index} id={index} className="Stats__RenderedItems">
    //                 <h3 className="RenderedItems__Item">{item[index].title}</h3>
    //                 <h3 className="RenderedItems__Item">-</h3>
    //                 <h3 className="RenderedItems__Item">{item[index].amount}</h3>
    //             </div>
    //         )
    //     })
    // }



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