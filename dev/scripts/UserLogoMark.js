import React from "react";
import LogoMarkOne from "./LogoMarkOne";
import LogoMarkTwo from "./LogoMarkTwo";
import LogoMarkThree from "./LogoMarkThree";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserLogoMark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            name: "",
            logoStyle: "",
            logoState: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        const dbref = firebase.database().ref(`/users/${userId}/choice`);
        dbref.on("value", snapshot => {
            console.log("hey");
            const data = snapshot.val();

            console.log(data);
            this.setState({
                choice: data
            });
        });

        const userId2 = firebase.auth().currentUser.uid;
        const dbref2 = firebase.database().ref(`/users/${userId}/name`);
        dbref2.on("value", snapshot => {
            console.log("hey");
            const data = snapshot.val();
            console.log(data);
            this.setState({
                name: data
            });
        });
    }

    handleChange(e) {
        this.setState({
            logoStyle: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const logo = this.state.logoStyle;
        const dbref = firebase.database().ref("/logo");

        dbref.push(logo);
        this.setState({
            logoState: true
        });
    }

    render() {

        return (

            <div className="userLogoMark-container">

                <form onSubmit={this.handleSubmit}>

                    <label>
                        <LogoMarkOne choice={this.state.choice} name={this.state.name} />
                        <input type="radio" value="option1" onChange={this.handleChange} checked={this.state.logoStyle === "option1"} />
                    </label>

                    <label>
                        <LogoMarkTwo choice={this.state.choice} name={this.state.name} />
                        <input type="radio" value="option2" onChange={this.handleChange} checked={this.state.logoStyle === "option2"} />
                    </label>

                    <label>
                        <LogoMarkThree choice={this.state.choice} name={this.state.name} />
                        <input type="radio" value="option3" onChange={this.handleChange} checked={this.state.logoStyle === "option3"} />
                    </label>

                    <input type="submit" value="Choose an Icon" />

                </form>

            </div>
        )
    }
}

export default UserLogoMark;