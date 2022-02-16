import React, {useState, useEffect} from 'react';
import '../style/navbar.css';

export default function Navbar({accueil, competence, cv, portfolio, contact}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [github, setGithub] = useState(false);
  const [linkedin, setLinkedin] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }
}, []);

const changeVisibilityGithub = () => {
  if(window.scrollY >= 100){
    setGithub(true);
    setLinkedin(true);
  }else {
    setGithub(false);
    setLinkedin(false);
  }
}
window.addEventListener('scroll', changeVisibilityGithub); 

  return (
    <>
    <nav className={navbar ? 'navbar active' : 'navbar'}>
       <h1 id="title">Samuel <strong className="nom"> George.</strong></h1>
      {(toggleMenu || screenWidth > 2560) && (
      <div className="list">
        <button onClick={() => accueil('accueil')} className="items">Accueil</button>
        <button onClick={() => competence('competence')} className="items">Compétences</button>
        <button onClick={() => cv('cv')} className="items">Cv</button>
        <button onClick={() => portfolio('portfolio')} className="items">Portfolio</button>
        <button onClick={() => contact('contact')} className="items">Contact</button>
      </div>
      )}
      <div className="right">
        <a href="https://github.com/SamG10"><i className="fab fa-github" className={github ? 'fa-github activegit' : 'fab fa-github'}></i></a> 
        <a href="https://www.linkedin.com/in/samuel-george-10/"><i className="fab fa-linkedin" className={linkedin ? 'fa-linkedin activelinkedin' : 'fab fa-linkedin'}></i></a> 
      <button onClick={toggleNav} className="burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
    </nav>
    </>
  )
}