import React from "react";

import H2Text from "./H2Text";

class MyBrands extends React.Component {
    render() {
        return (
            <div className="myBrands-container">
                <div className="myBrands">
                    <H2Text className={'mainFont'} text={'My Saved Brands'} />
                    <p>This tool is coming soon!</p>
                </div>
            </div>
        )
    }
}

export default MyBrands;
