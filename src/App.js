import React, { useState, useEffect } from "react";
import "./App.css";
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/applayout/AppLayout';
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import Demo from "./components/map/geolocation";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Productadd from "./components/productsadd/Productadd";
import Travelcard from "./components/travelcard/Travelcard";
import About from "./components/about/About";
import Loading from "./Loading";
import Sidebar from "./components/sidebar/Sidebar";
import ContactForm from "./components/Contactform/ContactForm";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
      <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AppLayout />}>
          <Route path='/Home' element={<Home />} />
          <Route path='/Travelcard' element={<Travelcard />} />
          <Route path='/Productadd' element={<Productadd />} />
          <Route path='/Demo' element={<Demo />} />
          <Route path='/ContactForm' element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
