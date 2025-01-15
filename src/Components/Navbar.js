import React from "react";
import './Navbar.css'


function Navbar(){

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementsByClassName("navbar").style.top = "0";
        } else {
          document.getElementsByClassName("navbar").style.top = "-50px";
        }
      }

    return(
    
    <nav class="navbar">
        <a href="#" >Home</a>
        <a href="#"class="active">Projects</a>
        <a href="#" >About Me</a>     
    <div id="footer-trigger"></div>

    
  </nav>)
  }

  export default Navbar