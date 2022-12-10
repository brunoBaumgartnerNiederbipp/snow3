import React from "react";
import './Service.css';
import Snow from "../../images/snowMobile.png";
import SnowDesktop from "../../images/snowDesktop.png";



function Service() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={SnowDesktop} className="App-Background" alt="Schneeladschaft" />
          <img src={Snow} className="App-BackgroundMobile" alt="Schneelandschaft" />
          <h1 className="App-title">MyIQ Webdesign</h1>
          <div className="App-intro">
           <p>
                Wordpress5, CSS3, HTML5, JavaScript, React.js
          </p>
          <div>  
            <p>Ihre Webseite wird Ihren Wünschen und Bedürfnissen angepasst.
                
            </p>
          </div>
          </div>
        </header>
      </div>
    );
        
  }
  
  export default Service;
  