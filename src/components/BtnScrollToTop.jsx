import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import '../style/btnscrolltotop.css';

const BtnScrollToTop = () => {

    useEffect(() => {
        //Get the button
        var mybutton = document.querySelector("#myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    });

    return <>
        <button onClick={() => this.topFunction()} id="myBtn" title="Go to top">Top</button>
    </>
}
export default BtnScrollToTop;