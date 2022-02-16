import React, { useRef } from "react";
import Accueil from "../components/Accueil";
import Competences from "../components/Competences";
import Cv from "../components/Cv";
import Portfolio from "../components/Portfolio";
import Contact from "../components/ContactController";
import Navbar from "../components/Navbar";

const Home = () => {
  const myRef = [];

  const Acc = () => {
    myRef[0].scrollIntoView(); 
  };
  const Comp = () => {
    myRef[1].scrollIntoView(); 
  }
  const Cvv = () => {
    myRef[2].scrollIntoView(); 
  }
  const Port = () => {
    myRef[3].scrollIntoView(); 
  }
  const Cont = () => {
    myRef[4].scrollIntoView(); 
  }
  return (
    <>
      <Navbar accueil={Acc} competence={Comp} cv={Cvv} portfolio={Port} contact={Cont} />

      <section className="top" id="acc" ref={(ref) => { myRef[0] = ref }}>
        <Accueil />
      </section>

      <section className="competence" id="comp" ref={(ref) => { myRef[1] = ref }} >
        <Competences />
      </section>

      <section className="cv" id="cv" ref={(ref) => { myRef[2] = ref }}>
        <Cv />
      </section>

      <section className="portfolio" id="port" ref={(ref) => { myRef[3] = ref }}>
        <Portfolio />
      </section>

      <section className="contact" id="cont" ref={(ref) => { myRef[4] = ref }}>
        <Contact />
      </section>
    </>
  );
};
export default Home;
