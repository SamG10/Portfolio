import React from 'react';
// import reactDom from 'react-dom';
import '../style/cv.css';




const Cv = () => {

    return <>
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
    </>
}
export default Cv;