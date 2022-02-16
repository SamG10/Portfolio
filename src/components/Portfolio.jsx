import React from 'react';
// import reactDom from 'react-dom';
import '../style/portfolio.css';
import noel from '../media/noel.png';
import tmdb from '../media/tmdb.png';




const Portfolio = () => {

    return <>
         <h1 id="portfolioh1">Portfolio</h1>

<div className="global_portfolio">
    <div className="card_portfolio">
    <div className="card_text">
        <a href="https://github.com/SamG10/Noel-tirage-cadeau" target="__blank"><img src={noel} alt="" /></a>
    </div>
    <div className="card_body">
        <h3>Tirage au sort de Noel</h3>
        <p>Projet en groupe de 4 personnes réalisé en décembre 2021. Création d'une application de tirage au sort de cadeau de Noel. Je me suis occupé de la partie Front de cette application</p>
    </div>
</div>
<div className="card_portfolio">
    <div className="card_text">
        <a href="https://github.com/SamG10/Tmdb-API" target="__blank"><img src={tmdb} alt="" /></a>
    </div>
    <div className="card_body">
        <h3>Manipulation API - TMDB</h3>
        <p>Manipulation de l'API TMDB, recupérer les posters, le synopsis, les acteurs, la note de chaque film et les afficher sous forme d'un slider horizontal. Ainsi que la fiche de chaque acteur. </p>
    </div>
</div>
</div>
    </>
}
export default Portfolio;