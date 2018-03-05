import React from "react";

class UserLogoIcon extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state.icons2[0])

    }

    render() {
        return <div>
            <p>Nishi</p>

            <div className="icon_ctn">
              <button>
                <img className="icon_fill" src={this.props.location.state.icons[0].preview_url} alt="" />
              </button>
            </div>

            <div className="icon_ctn">
              <button>
                <img className="icon_fill" src={this.props.location.state.icons[1].preview_url} alt="" />
              </button>
            </div>

             <div className="icon_ctn">
              <button>
                <img className="icon_fill" src={this.props.location.state.icons2[0].preview_url} alt="" />
              </button>
            </div>

             <div className="icon_ctn">
              <button>
                <img className="icon_fill" src={this.props.location.state.icons2[1].preview_url} alt="" />
              </button>
            </div>
          
           <div className="icon_ctn">
                    <button>
                        <img className="icon_fill" src={this.props.location.state.icons3[0].preview_url} alt="" />
                    </button>
                </div> 

                <div className="icon_ctn">
                    <button>
                        <img className="icon_fill" src={this.props.location.state.icons3[1].preview_url} alt="" />
                    </button>
                </div>
          
          
          </div>;
    }
}

export default UserLogoIcon;

// 5555555555555555555555555555555555555