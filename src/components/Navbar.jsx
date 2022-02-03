import React, {useState, useEffect} from 'react';
// import '../style/navbar.css';
import '../style/navbar.css';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';

// const Navbar = () => {
    
//     return (
//       <>
//         <nav className="navbar">
//           <h1 id="title">Samuel <strong class="nom"> George.</strong></h1>
//           <div className="all_links">
//             <a href="#" id="test">Accueil</a>
//             <a href="#" id="test">Compétences</a>
//             <a href="#" id="test">Cv</a>
//             <a href="#" id="test">Portfolio</a>
//             <a href="#" id="test">Contact</a>
//           </div>
//           <div className="right">
//             <a href="#"><img src={github} alt=""/></a> 
//             <a href="#"><img src={linkedin} alt=""/></a> 

//           <button className="burger">
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//           </div>
//         </nav>


// }
// export default Navbar;

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }
  
}, [])


  return (
    <nav className="navbar">
       <h1 id="title">Samuel <strong class="nom"> George.</strong></h1>
      {(toggleMenu || screenWidth > 1600) && (
      <div className="list">
        <a href="#acc" className="items">Accueil</a>
        <a href="#comp" className="items">Compétences</a>
        <a href="#cv" className="items">Cv</a>
        <a href="#port" className="items">Portfolio</a>
        <a href="#cont" className="items">Contact</a>
      </div>
      )}
      <div className="right">
        <a href="#"><img src={github} alt=""/></a> 
        <a href="#"><img src={linkedin} alt=""/></a> 
      <button onClick={toggleNav} className="burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
    </nav>
  )
}

