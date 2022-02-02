import React from 'react';
import '../style/home.css';
import '../style/competence.css';
import '../style/cv.css';
import '../style/portfolio.css';
import '../style/contact.css';
import html from '../media/html.svg';
import css from '../media/css.svg';
import js from '../media/js.svg';
import php from '../media/php.svg';
import sql from '../media/sql.svg';
import mysql from '../media/mysql.svg';
import bootstrap from '../media/bootstrap.svg';
import react from '../media/react.svg';
import symfony from '../media/symfony.svg';
import figma from '../media/figma.svg';
import photoshop from '../media/photoshop.svg';
import illustrator from '../media/illustrator.svg';
import git from '../media/git.svg';
// import noel from '../media/noel.png';
import tmdb from '../media/tmdb.png';


const Home = () => {
    return <>
    <section className="top">
        <div className="container_top">
            <h3>Bonjour je suis,</h3>
            <h1>Samuel George</h1>
            <p className="student">Etudiant développeur web Full Stack</p>
            <button className="btn_download">
                <a href="./cv.pdf" download>Télécharger mon cv</a>
            </button>
        </div>
    </section>
    
    <section className="competence">
        <h1 id="competenceh1">Compétences</h1>
        <div className="all_contact">
                    <h2 id="comph2">Languages</h2>
            <div className="global_comp1">
                        <div className="comp_img1">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={php} alt="" />
                        <img src={sql} alt="" />
                        <img src={mysql} alt="" />
                    </div>
                    </div>

                    <h2 id="comph2">Frameworks et Librairies</h2>
                    
                    <div className="global_comp2">
                        <div className="comp_img2">
                        <img src={bootstrap} alt="" />
                        <img src={react} alt="" />
                        <img src={symfony} alt="" />
                    </div>
                    </div>
                    
                    <h2 id="comph2">Outils</h2>
                    
                    <div className="global_comp3">
                        <div className="comp_img3">
                        <img src={figma} alt="" />
                        <img src={photoshop} alt="" />
                        <img src={illustrator} alt="" />
                        <img src={git} alt="" />
                    </div>
                    </div>
        </div>
        
    </section>

    <section className="cv">
        <h1 id="cvh1">Curriculum Vitae</h1>
        <div className="lol">
            <div className="background-cv">
            <div className="contenant">
            <div className="conteneur-cv1">
                <h3>STAPS, Lille</h3>
                <p className="date-cv">2018 - 2019</p>
                <p className="description-cv">Première année préparatoire au concours de kinésithérapeute</p>
            </div>
            <div className="rond">
                <div className="cercle"></div>
                <div className="cercle"></div>
                <div className="cercle"></div>
            </div>
            <div className="conteneur-cv2">
                <h3>HEPH Condorcet, Tournai</h3>
                <p className="date-cv">2019 - 2021</p>
                <p className="description-cv">Première et deuxième année de kinésithérapie</p>
            </div>
            <div className="rond">
                <div className="cercle"></div>
                <div className="cercle"></div>
                <div className="cercle"></div>
            </div>
            <div className="conteneur-cv3">
                <h3>ForEachAcademy, Lille</h3>
                <p className="date-cv">2021 - 22022</p>
                <p className="description-cv">Première année développeur web Full Stack</p>
            </div>
        </div>
        </div>
        </div>
        
        
    </section>

    <section className="portfolio">

        <h1 id="portfolioh1">Portfolio</h1>

        <div>dgfhjukil</div>
    </section>

    <section className="contact">
        <h1 id="contacth1">Contact</h1>
        <footer>
            <p>Copyright Samuel George. &copy; 2022</p>
        </footer>
        
    </section>
        
    </>
}
export default Home;