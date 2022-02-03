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
    </>
}
export default Competences;