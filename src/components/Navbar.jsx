import React, { useEffect } from 'react';
import '../style/navbar.css';
import github from '../media/github.svg';
import linkedin from '../media/linkedin.svg';

const Navbar = () => {

    // useEffect(() => {

    //   const links = document.getElementById('#test');
    //       const button = document.querySelector('.burger');

    //       button.addEventListener('click', () => {
    //         links.classList.add = 'active';
    //       })
    // });
    
    
    return (
      <>
        <nav className="navbar">
          <h1 id="title">Samuel <strong class="nom"> George.</strong></h1>
          <div className="all_links">
            <a href="#" id="test">Accueil</a>
            <a href="#" id="test">Compétences</a>
            <a href="#" id="test">Cv</a>
            <a href="#" id="test">Portfolio</a>
            <a href="#" id="test">Contact</a>
          </div>
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