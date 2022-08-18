import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import myApi from "../../Api/Api";
import { useEffect, useState } from 'react';



function Main() {
  const [items, setItems] = useState([]);
  const [purchases, setPurchases] = useState([]);
  let unifiedPurchaseData = [];
  let filteredData = [];
  let totals = [];

  const date = (i) => {
    const year = purchases[i].timePosted.slice(0, 4);
    const month = purchases[i].timePosted.slice(5, 7);
    const day = purchases[i].timePosted.slice(8, 10);

    return `${day}.${month}.${year}`;
  }

  let renderer = 0;

  useEffect(() => {
    const handleSetItems = async () => {
      try {
        const res = await myApi.get('/items');
        setItems([...res.data]);
      } catch (err) {
        console.log(err)
      }
    }
    handleSetItems()
  }, [])

  useEffect(() => {
    const handleSetPurchases = async () => {
      try {
        const res = await myApi.get('/purchases');
        setPurchases([...res.data]);
      } catch (err) {
        console.log(err)
      }
    }
    handleSetPurchases()
  }, [])

  // ============================================================================

  useEffect(() => {
    const handleFilterPurchases = () => {
      let dates = [];
      for (let i = 0; i < purchases.length; i++) {
        for (let j = 0; j < purchases[i].purchase.length; j++) {
          unifiedPurchaseData.push(purchases[i].purchase[j]);
          dates.push({
            date: date(i)
          })
        }
      }
      for (let k = 0; k < unifiedPurchaseData.length; k++) {
        if (unifiedPurchaseData[k].title !== undefined) {
          filteredData.push({
            title: unifiedPurchaseData[k].title,
            amount: unifiedPurchaseData[k].amount,
            id: unifiedPurchaseData[k].id,
          })
        }
      }
      for (let l = 0; l < unifiedPurchaseData.length; l++) {
        if (unifiedPurchaseData[l].total !== undefined) {
          totals.push({
            total: unifiedPurchaseData[l].total,
            purchaseDate: dates[l].date
          })
        }
      }
    }
    handleFilterPurchases();
  })











  // ============================================================================

  const handleRender = () => {
    renderer = renderer + 1;
  }

  return (
    <div className="App">
      <div className="renderer">{renderer}</div>
      <Router>
        <div>
          <Link to={"/"}>
            <button onClick={handleRender}>Home</button>
          </Link>
          <Link to={"/admin"}>
            <button onClick={handleRender}>Admin</button>
          </Link>
          <Link to={"/stats"}>
            <button onClick={handleRender}>Stats</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" exact element={<Home items={items} setItems={setItems} renderer={renderer} purchases={purchases} />} />
          <Route path="/admin" exact element={<Admin items={items} setItems={setItems} renderer={renderer} />} />
          <Route path="/stats" exact element={<Stats items={items} purchases={purchases} renderer={renderer} filteredData={filteredData} totals={totals} unifiedPurchaseData={unifiedPurchaseData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
