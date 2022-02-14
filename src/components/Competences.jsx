import React from 'react';
import '../style/competence.css';
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


const Competences = () => {

    return <>
        <h1 id="competenceh1">Compétences</h1>

        <div className="global_comp">
        
                    <h2 id="comph2">Languages</h2>  
                 <div className="global_comp1">
                        <div className="comp_img1">
                        <img src={html} alt="html" />
                        <img src={css} alt="css" />
                        <img src={js} alt="js" />
                        <img src={php} alt="php" />
                        <img src={sql} alt="sql" />
                        <img src={mysql} alt="mysql" />
                    </div>
                    </div>

                    <h2 id="comph2">Frameworks et Librairies</h2>
                    
                    <div className="global_comp2">
                        <div className="comp_img2">
                        <img src={bootstrap} alt="bootstrap" />
                        <img src={react} alt="react" />
                        <img src={symfony} alt="symfony" />
                    </div>
                    </div>
                    
                    <h2 id="comph2">Outils</h2>
                    
                    <div className="global_comp3">
                        <div className="comp_img3">
                        <img src={figma} alt="figma" />
                        <img src={photoshop} alt="photoshop" />
                        <img src={illustrator} alt="illustrator" />
                        <img src={git} alt="git" />
                    </div>
                    </div>

        </div>
           
    </>
}
export default Competences;