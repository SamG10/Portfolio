import React from 'react';
import Accueil from '../components/Accueil';
import Competences from '../components/Competences';
import Cv from '../components/Cv';
import Portfolio from '../components/Portfolio';
import Contact from '../components/ContactController';



const Home = () => {
    return <>

    <section className="top" id="acc">
      <Accueil/>
    </section>
    
    <section className="competence" id="comp">
        <Competences/>
    </section>

    <section className="cv" id="cv">
       <Cv/>
    </section>

    <section className="portfolio" id="port">
        <Portfolio/>
    </section>

    <section className="contact" id="cont">
       <Contact/>
    </section>
        
    </>
}
export default Home;