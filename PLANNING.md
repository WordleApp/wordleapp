ABOUT PAGE

import React from 'react';
import './About.css';

export default function About() {
  return (
    <>
  
      <h2>Meet The Creators</h2>
      
      <div className="developers-container">
        <div className="developer-bio">
          <h2 className="name">Sam Benatovich</h2>
          <h5 className="title">
              Full-Stack Software Developer
          </h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/sam-benatovich/">LinkedIn</a>
            </li>

            <li>
              <a href="https://github.com/benatovich">GitHub</a>
            </li>
          </ul>
          <div>
            <p className="bio-text">
              Sam is a creative problem solver who tends to see obstacles as puzzles waiting to be solved. Software engineering has been a natural fit for Sam and he is continuously evolving his proclivity for solving puzzles.
            </p>
          </div>
        </div>

        <div className="developer-bio">
          <h2 className="name">Abriel Cleaver</h2>
          <h5 className="title">
          Full-Stack Software Developer
          </h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/abrielcleaver/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/abrielcleaver">GitHub</a>
            </li>
          </ul>
          <p>
            Abriel is a multifaceted developer with a background in Mental Health & Wellness, photography, and marketing. She enjoys learning new technologies and working with diverse teams. 
          </p>
        </div>

        <div className="developer-bio">
          <h2 className="name">Philippe Ngom</h2> 
          <h5 className="title">
          Full-Stack Software Developer
          </h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/philippe-ngom-134113102/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/philngom">GitHub</a>
            </li>
          </ul>
          <p>
            Philippe is a developer with a background in ....
          </p>
        </div>
    
        <div className="developer-bio">
          <h2 className="name">Arma Burton</h2> 
          <h5 className="title">
          Full-Stack Software Developer
          </h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/arma-burton/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/armaBurton">GitHub</a>
            </li>
          </ul>
          <p>
            Arma is a developer with a background in ....
          </p>
        </div>
      </div>
    </>
  );
}



ADD TO APP

// ? <header>
// <ul>
//   <li className='nav-link'> <NavLink to='about'>About</NavLink></li>
// </ul>

// </header>

ABOUT CSS

body {
  background-color: #E6DBD0;
}

.developers-container {
  padding: 20px;
  justify-content: space-around;
}

.name {
  color: #7D6167;
  font-family: 'EB Garamond', serif;
  font-size: 20px;
}

.title {
  color: #708B75;
}

a {
  color: #8d9174;
}

.developer-bio {
  width: 36vw;
  text-align: right;
  color: #464949;
  font-family: 'EB Garamond', serif;;
}

ul {
  list-style: none;
}