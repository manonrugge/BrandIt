import React from "react";
import LogoMarkOne from "./LogoMarkOne";
import LogoMarkTwo from "./LogoMarkTwo";
import LogoMarkThree from "./LogoMarkThree";


class UserMockUp extends React.Component {
    constructor() {
        super()
        this.state = {
            choice: "",
            name: ""
        }
    }

    componentDidMount() {
        const dbref = firebase.database().ref("/choice");
        dbref.on("value", snapshot => {
            console.log("hey");
            const data = snapshot.val();

            console.log(data);
            this.setState({
                choice: data
            });
        });

        const dbref2 = firebase.database().ref("/name");
        dbref2.on("value", snapshot => {
            console.log("hey");
            const data = snapshot.val();
            console.log(data);
            this.setState({
                name: data
            });
        });
    }

    render() {
        return (
            <div className="userMockUp-container">

                <div className="tshirt-container">
                    <img className="tshirt" src="./dev/assets/tshirt.png" alt="" />

                    <div className="logoMark-container-tshirt">
                        {/* <LogoMarkOne choice={this.state.choice} name={this.state.name} /> */}
                        {/* <LogoMarkTwo choice={this.state.choice} name={this.state.name} /> */}
                        <LogoMarkThree choice={this.state.choice} name={this.state.name} />
                    </div>
                </div>

                <div className="stationary-container">
                    <img className="stationary" src="./dev/assets/03.jpg" alt="" />
                    <div className="logoMark-container-stationary1 ">
                        {/* <LogoMarkOne choice={this.state.choice} /> */}
                        {/* <LogoMarkTwo choice={this.state.choice} /> */}
                        <LogoMarkThree choice={this.state.choice} />
                    </div>

                    <div className="logoMark-container-stationary2">
                        {/* <LogoMarkOne choice={this.state.choice} /> */}
                        {/* <LogoMarkTwo choice={this.state.choice} /> */}
                        <LogoMarkThree choice={this.state.choice} />
                    </div>

                </div>

            </div>
        )
    }
}



export default UserMockUp;