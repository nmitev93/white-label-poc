import React from "react";
import Homepage from './pages/Homepage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Listing from "./pages/Groups/Listing";
import CreateGroup from "./pages/Groups/Create";
import GroupDetails from "./pages/Groups/Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/listing' element={<Listing/>} />
          <Route path='/create-group' element={<CreateGroup/>} />
          <Route path='/group/:id/edit' element={<CreateGroup/>} />
          <Route path='/group/:id' element={<GroupDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
