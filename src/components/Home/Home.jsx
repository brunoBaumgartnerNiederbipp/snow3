import React from "react";
import './Home.css';
import Snow from "../../images/snowMobile.png";
import SnowDesktop from "../../images/snowDesktop.png";



function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={SnowDesktop} className="App-Background" alt="Schneeladschaft" />
          <img src={Snow} className="App-BackgroundMobile" alt="Schneelandschaft" />
          <h1 className="App-title">MyIQ Webdesign</h1>
          <div className="App-intro">
           <p>
            Modern webdesign for your business.
          Ich bin professioneller Webdesigner in Wordpress5 und ReactJS.
          Ich erstelle moderne und responsive Webseiten für Ihr Unternehmen.
          </p>
          <div>  
            <p>Ich bin professioneller Webdesigner in Wordpress5 und ReactJS.
          </p>
          </div>
          </div>
        </header>
      </div>
    );
        
  }
  
  export default Home;
  