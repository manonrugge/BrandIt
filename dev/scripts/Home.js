import React from "react";
import Gallery from "./Gallery";
import Footer from "./Footer";
import SignIn from "./SignIn";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//inside the home component 

//nav bar
//gallery
//button

const Home = (props) => {
    return (
      <div className="home-container">
        <div className="home">
          <Gallery />
          <img src="./dev/assets/brandit-logo.svg" alt="" />
          <h2>Brandit</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            tenetur necessitatibus, explicabo doloremque ab eos dolorem id velit
            obcaecati optio saepe reprehenderit facere provident nisi quos alias
            harum illum distinctio?
          </p>
          {props.loggedIn ?
            <Link to={`/UserInputText`}>
              <button className="getStarted"> Get Started </button>
            </Link>
            :
            <Link to="/signin" className="link-btn"><button>Sign In</button></Link>
          }
        </div>
        <Footer />
        
      </div>
  )
  }


export default Home;
