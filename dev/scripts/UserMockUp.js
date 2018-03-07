import React from "react";
import LogoMarkOne from "./LogoMarkOne";
import LogoMarkTwo from "./LogoMarkTwo";
import LogoMarkThree from "./LogoMarkThree";
class UserMockUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            choice: "",
            name: "",
            logo: "", 
            color: ""
        }
    }
    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        const dbref = firebase.database().ref(`/users/${userId}/choice`);
        dbref.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                choice: data
            });
        });

        const colorState = this.props.color;
        this.setState ({
            color: colorState
        });
        
        const dbref2 = firebase.database().ref(`/users/${userId}/name`);
        dbref2.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                name: data
            });
        });
        
        const dbref3 = firebase.database().ref(`/users/${userId}/logo`);
        dbref3.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                logo: data
            });
        });
    }
    render() {
        return (
            <div className="userMockUp-container">
                <div className="tshirt-container">
                    <img className="tshirt" src="./dev/assets/tshirt.png" alt="" />
                    <div className="logoMark-container-tshirt">
                        {this.state.logo === "option1" ?
                            <LogoMarkOne choice={this.state.choice} name={this.state.name} color={this.state.color} />

                            : this.state.logo === "option2" ?
                                <LogoMarkTwo choice={this.state.choice} name={this.state.name} color={this.state.color}/>
                                :
                                <LogoMarkThree choice={this.state.choice} name={this.state.name} color={this.state.color}/>

                        }
                    </div>
                </div>
                <div className="stationary-container">
                    <img className="stationary" src="./dev/assets/03.jpg" alt="" />
                    <div className="logoMark-container-stationary1 ">
                        {this.state.logo === "option1" ?
                            <LogoMarkOne choice={this.state.choice} color={this.state.color}/>
                            : this.state.logo === "option2" ?
                                <LogoMarkTwo choice={this.state.choice} color={this.state.color}/>
                                :
                                <LogoMarkThree choice={this.state.choice} color={this.state.color}/>
                        }
                    </div>
                    <div className="logoMark-container-stationary2">
                        {this.state.logo === "option1" ?
                            <LogoMarkOne choice={this.state.choice} color={this.state.color}/>
                            : this.state.logo === "option2" ?
                                <LogoMarkTwo choice={this.state.choice} color={this.state.color}/>
                                :
                                <LogoMarkThree choice={this.state.choice} color={this.state.color}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default UserMockUp;

