import Home from "./components/Pages/Home/Home";
import {Link, Route, Routes} from "react-router-dom";
import About from "./components/Pages/About/About";
import Agents from "./components/Pages/Agents/Agents";
import AviaCharterList from "./components/Pages/AviaCharterList/AviaCharterList";
import AviaList from "./components/Pages/AviaList/AviaList";
import HotelList from "./components/Pages/HotelList/HotelList";
import HotelDetail from "./components/Pages/HotelDetail/HotelDetail";
import MyBlock from "./components/Pages/MyBlock/MyBlock";
import MyBonus from "./components/Pages/MyBonus/MyBonus";
import MyCab from "./components/Pages/MyCab/MyCab";
import MyFinance from "./components/Pages/MyFinance/MyFinance";
import MyOrder from "./components/Pages/MyOrders/MyOrders";
import MyTours from "./components/Pages/MyTours/MyTours";
import Offices from "./components/Pages/Offices/Offices";
import TourList from "./components/Pages/TourList/TourList";
import TourDetail from "./components/Pages/TourDetail/TourDetail";
import Vacancy from "./components/Pages/Vacancy/Vacancy";


function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/avia-charter-list">Charter List</Link>
        <Link to="/avia-list">Avia List</Link>
        <Link to="/hotel-list">Hotel List</Link>
        <Link to="/hotel-detail">Hotel Detail</Link>
        <Link to="/my-block">My Block</Link>
        <Link to="/my-bonus">My Bonus</Link>
        <Link to="/my-cab">My Cabinet</Link>
        <Link to="/my-finance">My Finance</Link>
        <Link to="/my-order">My Order</Link>
        <Link to="/my-tours">My Tours</Link>
        <Link to="/offices">Offices</Link>
        <Link to="/tour-list">Tour List</Link>
        <Link to="/tour-detail">Tour Detail</Link>
        <Link to="/vacancy">Vacancy</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/agents" element={<Agents/>}/>
        <Route path="/avia-charter-list" element={<AviaCharterList/>}/>
        <Route path="/avia-list" element={<AviaList/>}/>
        <Route path="/hotel-list" element={<HotelList/>}/>
        <Route path="/hotel-detail" element={<HotelDetail/>}/>
        <Route path="/my-block" element={<MyBlock/>}/>
        <Route path="/my-bonus" element={<MyBonus/>}/>
        <Route path="/my-cab" element={<MyCab/>}/>
        <Route path="/my-finance" element={<MyFinance/>}/>
        <Route path="/my-order" element={<MyOrder/>}/>
        <Route path="/my-tours" element={<MyTours/>}/>
        <Route path="/offices" element={<Offices/>}/>
        <Route path="/tour-list" element={<TourList/>}/>
        <Route path="/tour-detail" element={<TourDetail/>}/>
        <Route path="/vacancy" element={<Vacancy/>}/>
      </Routes>
    </div>
  );
}

export default App;

