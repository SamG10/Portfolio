import React from 'react';
import '../style/contact.css';
import App from './Contact';
import '../style/contact.css';


const ContactController = () => {

    return <>
         <h1 id="contacth1">Contact</h1>
    <App/>
        <footer>
            <div className="img_social">
                <a href="https://github.com/SamG10"><i class="fab fa-github"></i></a> 
                <a href="https://www.linkedin.com/in/samuel-george-10/"><i class="fab fa-linkedin"></i></a> 
            </div>
 
            <p>Copyright Samuel George. &copy; 2022</p>
        </footer>
        
    </>
}
export default ContactController;