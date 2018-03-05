import React from "react";

import H2Text from "./H2Text";

class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <div className="about">
                    <H2Text className={'mainFont'} text={'About BrandIt!!!'} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sequi ipsa quibusdam corrupti, unde a, nesciunt provident illo laborum maiores fuga officiis cum rerum maxime officia aperiam, qui inventore. Voluptates?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sequi ipsa quibusdam corrupti, unde a, nesciunt provident illo laborum maiores fuga officiis cum rerum maxime officia aperiam, qui inventore. Voluptates?</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        )
    }
}

export default About;
