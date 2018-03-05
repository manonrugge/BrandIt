import React from "react";
import Gallery from "./Gallery";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//inside the home component 

//nav bar
//gallery
//button

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
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
        </div>
        <Link to={`/UserInputText`}>
          <button className="getStarted"> Get Started </button>
        </Link>
      </div>
  )
  }
}

export default Home;
