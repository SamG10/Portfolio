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
        <a href=""><img src={noel} alt="" /></a>
    </div>
    <div className="card_body">
        <h3>Tirage au sort de Noel</h3>
        <p>defrgthyuiouytgrfedzergtyuiopi</p>
    </div>
</div>
<div className="card_portfolio">
    <div className="card_text">
        <a href=""><img src={tmdb} alt="" /></a>
    </div>
    <div className="card_body">
        <h3>TMDB</h3>
        <p>defrgthyuiouytgrfedzergtyuiopi</p>
    </div>
</div>
</div>
    </>
}
export default Portfolio;