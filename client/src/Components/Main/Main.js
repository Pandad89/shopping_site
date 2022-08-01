import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import myApi from "../../Api/Api";
import { useEffect, useState } from 'react';



function Main() {
    const [items, setItems] = useState([]);
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
          <Route path="/" exact element={<Home items={items} setItems={setItems} renderer={renderer} />} />
          <Route path="/admin" exact element={<Admin items={items} setItems={setItems} renderer={renderer}/>} />
          <Route path="/stats" exact element={<Stats items={items} setItems={setItems} renderer={renderer} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
