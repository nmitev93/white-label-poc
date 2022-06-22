import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <Link to='/listing'>Groups listing</Link>
      <Link to='/create-group'>Create group</Link>
    </>
  )
}

export default Homepage;
