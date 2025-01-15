import React from "react";
import './Navbar.css'

function Mobnavbar(){
    return (
        <nav class="navbar navbar-dark bg-dark mobile-navbar">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        
        <a href="home.html" class="d-block text-white mb-2">Home</a>
        <a href="projects.html" class="d-block text-white mb-2"className="active">Projects</a>
        <a href="About-me.html" class="d-block-text-white-mb-2" style={{color : 'white'}}>About Me</a>
      </div>
    </div>
  </nav>
    )
}

export default Mobnavbar