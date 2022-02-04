import React, {useState, useEffect} from 'react';
// import '../style/navbar.css';
import '../style/navbar.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const Navbar = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250 ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  };

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }
  
}, []);


  return (
    <nav className="navbar">
       <h1 id="title">Samuel <strong class="nom"> George.</strong></h1>
      {(toggleMenu || screenWidth > 2560) && (
      <div className="list">
        <a href="#acc" className="items">Accueil</a>
        <a href="#comp" className="items">Compétences</a>
        <a href="#cv" className="items">Cv</a>
        <a href="#port" className="items">Portfolio</a>
        <a href="#cont" className="items">Contact</a>
      </div>
      )}
      <div className="right">
        <a href="https://github.com/SamG10"><i class="fab fa-github"></i></a> 
        <a href="https://www.linkedin.com/in/samuel-george-10/"><i class="fab fa-linkedin"></i></a> 
      <button onClick={toggleNav} className="burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
    </nav>
  )
}
