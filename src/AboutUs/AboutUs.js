import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='about-us-div'>
  
      <h2>Meet The Creators</h2>
      
      <div className="developers-container">
        <div className="developer-bio">
          <h2 className="name">Sam Benatovich</h2>
          <h5 className="title">
              Full-Stack Software Developer
          </h5>
          <ul>
            <li>
              <a className='about-us-a' href="https://www.linkedin.com/in/sam-benatovich/">LinkedIn</a>
            </li>

            <li>
              <a className='about-us-a' href="https://github.com/benatovich">GitHub</a>
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
              <a className='about-us-a' href="https://www.linkedin.com/in/abrielcleaver/">LinkedIn</a>
            </li>
            <li>
              <a className='about-us-a' href="https://github.com/abrielcleaver">GitHub</a>
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
              <a className='about-us-a' href="https://www.linkedin.com/in/philippe-ngom-134113102/">LinkedIn</a>
            </li>
            <li>
              <a className='about-us-a' href="https://github.com/philngom">GitHub</a>
            </li>
          </ul>
          <p>
          Philippe Ngom is a software developer in Seattle, WA.  He has a decade of military experience as an industrial maintainer. He enjoys collaborating and building useful applications.
          </p>
        </div>
    
        <div className="developer-bio">
          <h2 className="name">Arma Burton</h2> 
          <h5 className="title">
          Full-Stack Software Developer
          </h5>
          <ul>
            <li>
              <a className='about-us-a' href="https://www.linkedin.com/in/arma-burton/">LinkedIn</a>
            </li>
            <li>
              <a className='about-us-a' href="https://github.com/armaBurton">GitHub</a>
            </li>
          </ul>
          <p>
          Arma Burton is a software developer in Portland, OR. He is a former constructioneer and graphic-designer pursuing a more rewarding career with upward mobility. He has two legs from his hips to the ground and when he moves them he walks around.
          </p>
        </div>
      </div>
    </div>
  );
}

