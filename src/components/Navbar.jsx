import React from 'react';
import '../style/navbar.css';
import github from '../media/github.svg';
import linkedin from '../media/linkedin.svg';

const Navbar = () => {

    return (
      <>
        <nav className="navbar">
          <h1 id="title">Samuel <strong class="nom"> George.</strong></h1>
          <div className="right">
            <a href="#"><img src={github} alt="" /></a> 
            <a href="#"><img src={linkedin} alt="" /></a> 
          <button className="burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
          </div>
          
        </nav>
        
      </>
    );


}
export default Navbar;