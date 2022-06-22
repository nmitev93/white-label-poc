import React from 'react';
import {Link} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <>
      <Header/>
      <h1>Homepage</h1>
      <Link to='/listing'>Groups listing</Link>
      <Link to='/create-group'>Create group</Link>
      <Footer/>
    </>
  )
}

export default Homepage;
