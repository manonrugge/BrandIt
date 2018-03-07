import React from "react";

import H2Text from "./H2Text";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserInputColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMainColor: ''
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.colorSubmit = this.colorSubmit.bind(this);
        // here is our constructor lifecycle method
    }

    componentDidMount() {
        // here is anything we want to happen after the component renders - like grab our AJAX data
    }

    handleOptionChange(e) {
        this.setState({
            selectedMainColor: e.target.value
        })
        console.log(e.target.value);
    }


    colorSubmit(e) {
        e.preventDefault();
        const color = this.state.selectedMainColor;
        console.log("colorSubmit")
        this.setState({
            selectedMainColor: color
        })
    }

    render() {
        return (
            <div className="UserInputColorContainer wrapper">
                <form action="" className="colorForm" onSubmit={this.colorSubmit} className="content-container">
                    <H2Text className={'mainFont'} text={'Select a Font Color'} />
                    <div className="mainColor">
                        <div className="radio main-color-div">
                            <label htmlFor="layoutOne" className="btn-color layout-one"></label>
                            <input type="radio" name="mainColor" value="#000000" id="layoutOne" onChange={this.handleOptionChange} />
                        </div>
                        <div className="radio main-color-div">
                            <label htmlFor="layoutTwo" className="btn-color layout-two"></label>
                            <input type="radio" name="mainColor" value={"#468189"} id="layoutTwo" onChange={this.handleOptionChange} />
                        </div>
                        <div className="radio main-color-div">
                            <label htmlFor="layoutThree" className="btn-color layout-three"></label>
                            <input type="radio" name="mainColor" value={"#3D348B"} id="layoutThree" onChange={this.handleOptionChange} />
                        </div>
                        <div className="radio main-color-div">
                            <label htmlFor="layoutFour" className="btn-color layout-four"></label>
                            <input type="radio" name="mainColor" value={"#706361"} id="layoutFour" onChange={this.handleOptionChange} />
                        </div>
                        <div className="radio main-color-div">
                            <label htmlFor="layoutFive" className="btn-color layout-five"></label>
                            <input type="radio" name="mainColor" value={"#F55536"} id="layoutFive" onChange={this.handleOptionChange} />
                        </div>
                    </div>
                    <input className="button" type="submit" value="Submit Chosen Colours" />
                </form>
                <div className="link-container">
                    <Link to={
                        {
                            pathname: "/UserLogoMark",
                            state: {
                                color: this.state.selectedMainColor
                            }
                        }
                    }><img src="./dev/assets/arrow.svg" alt="" /></Link>
                </div>
            </div>
        )
    }


}

export default UserInputColor;