import React from 'react';
import Accueil from '../components/Accueil';
import Competences from '../components/Competences';
import Cv from '../components/Cv';
import Portfolio from '../components/Portfolio';
import Contact from '../components/ContactController';



const Home = () => {
    return <>

    <section className="top">
      <Accueil/>
    </section>
    
    <section className="competence">
        <Competences/>
    </section>

    <section className="cv">
       <Cv/>
    </section>

    <section className="portfolio">
        <Portfolio/>
    </section>

    <section className="contact">
       <Contact/>
    </section>
        
    </>
}
export default Home;