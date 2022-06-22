import React from "react";
import Homepage from './pages/Homepage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Listing from "./pages/Groups/Listing";
import CreateGroup from "./pages/Groups/Create";
import GroupDetails from "./pages/Groups/Details";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/listing' element={<Listing/>} />
          <Route path='/create-group' element={<CreateGroup/>} />
          <Route path='/group/:id/edit' element={<CreateGroup/>} />
          <Route path='/group/:id' element={<GroupDetails/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
