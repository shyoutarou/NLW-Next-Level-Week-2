import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import logoimg from '../../assets/images/logo.svg';
import landingimg from '../../assets/images/landing.svg';
import studyicon from '../../assets/images/icons/study.svg';
import giveClassesicon from '../../assets/images/icons/give-classes.svg';
import purplehearticon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img 
                    src={landingimg} 
                    alt="Platarforma de estudos" 
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyicon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesicon} alt="Dar aulas"/>
                        Dar aula
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões realizadas <img src={purplehearticon} alt="Coração"/>
                </span>
            </div>
        </div> 
    );
  }

  export default Landing;