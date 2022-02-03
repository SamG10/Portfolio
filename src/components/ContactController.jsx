import React from 'react';
import '../style/contact.css';
import github from '../media/github.svg';
import linkedin from '../media/linkedin.svg';
import App from './Contact';
import '../style/contact.css';


const ContactController = () => {

    return <>
         <h1 id="contacth1">Contact</h1>
    <App/>
        <footer>
            <div className="img_social">
                <a href="#"><img src={github} alt="" /></a> 
                <a href="#"><img src={linkedin} alt="" /></a> 
            </div>
 
            <p>Copyright Samuel George. &copy; 2022</p>
        </footer>
        
    </>
}
export default ContactController;