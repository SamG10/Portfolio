import React from 'react';
import '../style/accueil.css';





const Accueil = () => {

    return <>
          <div className="container_top">
            <h3>Bonjour je suis,</h3>
            <h1>Samuel George</h1>
            <p className="student">Etudiant développeur web Full Stack</p>
            
            <button className="btn_download">
                <a href="./cv.pdf">Télécharger mon cv</a>
            </button>
        </div>
        
    </>
}
export default Accueil;