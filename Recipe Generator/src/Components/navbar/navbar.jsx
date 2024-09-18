import React from 'react';
import "./navbar.css"; 
import { getImageUrl } from "../../utils.js";


export const Navbar = () => {
  return (
    <div className="nav">
      <img src={getImageUrl("navbar/Licious-Logo.png")} alt="Licious logo" className='logo'/>
      <div className='searchBar'>
        <input type="search" name="" id="" placeholder='Search your favourite recipes..' className="search-space"/>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      
      <div className="home">
        <i class="fa-solid fa-house"></i>
      </div>

    </div>
  );
};
