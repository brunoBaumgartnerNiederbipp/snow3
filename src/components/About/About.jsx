import React from "react";
import './About.css';
import Snow from "../../images/snowMobile.png"
import SnowDesktop from "../../images/snowDesktop.png"



function About() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={SnowDesktop} className="App-Background" alt="Schneeladschaft" />
          <img src={Snow} className="App-BackgroundMobile" alt="Schneelandschaft" />
          <h1 className="App-title">MyIQ Webdesign</h1>
          <div className="App-intro">
           <p>
            Modern webdesign Seit 2018.
         Professionelle Wordpress5 Seiten so wie React.js Onepage Seiten.
          </p>
          <div>  
            <p>Brauchen Sie eine Webseite für Ihr Unternehmen oder einen kleveren Funel für Facebook?.
                Kontaktieren Sie mich per Telefon und lassen Sie sich Unverbindlich und Kostenlos beraten!
            </p>
          </div>
          </div>
        </header>
      </div>
    );
        
  }
  
  export default About;
  