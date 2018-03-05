import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


//inside the home component 

// input text your company
// input text your keywords

//55555555555555555555555555555555


class UserInputText extends React.Component {

constructor() {
    super();
    this.state = {
      icons: [],
      query: "",
      icons2: [],
      query2: "",
      icons3: [],
      query3: "",
      companyName:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchIcons = this.searchIcons.bind(this);
    this.searchIcons2 = this.searchIcons2.bind(this);
    this.searchIcons3 = this.searchIcons3.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  searchIcons() {
    const query = this.state.query;
    axios
      .get("https://brandit2018.herokuapp.com/v1/", {
        params: {
          url: `icons/${this.state.query}`,
          params: JSON.stringify({
          })
        }
      })
      .then(({ data }) => {
        console.log(data.icons);
      const iconsState = [];
      for (let i = 0; i < 2; i++) {
      iconsState.push(data.icons[Math.floor(Math.random() * data.icons.length)]);
        this.setState({
          icons: iconsState,
          query: ""
        });
      }});
  }

  searchIcons2() {
    const query = this.state.query2;
    axios
      .get("https://brandit2018.herokuapp.com/v1/", {
        params: {
          url: `icons/${this.state.query2}`,
          params: JSON.stringify({
            // limit: 2
          })
        }
      })
      .then(({ data }) => {
        console.log(data.icons);
         const iconsState = [];
      for (let i = 0; i < 2; i++) {
      iconsState.push(data.icons[Math.floor(Math.random() * data.icons.length)]);
        this.setState({
          icons2: iconsState,
          query2: ""
        });
      }});
  }

  searchIcons3() {
    const query = this.state.query3;
    axios
      .get("https://brandit2018.herokuapp.com/v1/", {
        params: {
          url: `icons/${this.state.query3}`,
          params: JSON.stringify({
          })
        }
      })
      .then(({ data }) => {
        console.log(data.icons);
         const iconsState = [];
      for (let i = 0; i < 2; i++) {
      iconsState.push(data.icons[Math.floor(Math.random() * data.icons.length)]);
        this.setState({
          icons3: iconsState,
          query3: ""
        });
      }});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.searchIcons();
    this.searchIcons2();
    this.searchIcons3();
  }



  render() {
    return <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="query">Your Company Name: </label>
          <input type="text" value={this.state.companyName} onChange={this.handleChange} id="companyName" required />

          <label htmlFor="query">Your key words: </label>
          <input type="search" value={this.state.query} onChange={this.handleChange} id="query" required />
          <input type="search" value={this.state.query2} onChange={this.handleChange} id="query2" required />
          <input type="search" value={this.state.query3} onChange={this.handleChange} id="query3" required />
          <input type="submit" value="Search for Icons" />
        </form>

        <Link to={
            {
                pathname: '/UserLogoIcon',

                state: {  icons: this.state.icons,
                        query: this.state.query,
                        icons2: this.state.icons2,
                        query2: this.state.query2,
                        icons3: this.state.icons3,
                        query3: this.state.query3,
                        companyName: this.state.companyName }

            }}>
         <button>next page</button>
        </Link>

        {/* {this.state.icons.map(icon => {
          return <SingleIcon icon={icon} key={icon.id} />;
        })}

        {this.state.icons.map(icon => {
          // return <Link to={`/choices/${icon.id}`}>Create Idea</Link>;
          return <Link to={`/choices/${icon.id}`}>Create Idea</Link>;

        })}

        {this.state.icons2.map(icon => {
          return <SingleIcon icon={icon} key={icon.id} />;
        })}

        {this.state.icons2.map(icon => {
          return <Link to={`/choices/${icon.id}`}>Create Idea</Link>;
        })}

        {this.state.icons3.map(icon => {
          return <SingleIcon icon={icon} key={icon.id} />;
        })}

        {this.state.icons3.map(icon => {
          // return <Link to={`/choices/${icon.id}`}>Create Idea</Link>;
          return <Link to={`/choices/${icon.id}`}>Create Idea</Link>;
        })} */}
      </div>;
  }
}

export default UserInputText;


