import React from "react";
import './Contact.css';
import Snow from "../../images/snowMobile.png";
import SnowDesktop from "../../images/snowDesktop.png";



function Contact() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={SnowDesktop} className="App-Background" alt="Schneeladschaft" />
          <img src={Snow} className="App-BackgroundMobile" alt="Schneelandschaft" />
          <h1 className="App-title">MyIQ Webdesign</h1>
          <div className="App-intro">
           <p>
              079 955 28 59
          </p>
          <div>  
            <p>Lets' Talk!
                
            </p>
          </div>
          </div>
        </header>
      </div>
    );
        
  }
  
  export default Contact;
  