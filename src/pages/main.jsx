import React from 'react';
import { Link } from 'react-router-dom';
import background from '../backgroundImage.jpeg';



const Mainpage = () => {
  return (
    <div className="Mainpage">
      <img src={ background } alt="background" className="bg"></img>
      <div className="content">
        <h1>Hack Illinois</h1>
      </div>
      <div>
        <Link to="/schedule"><button className="button">Day of</button></Link>
      </div>
    </div>
  );
};

export default Mainpage;