import React from "react";
import Slider from "react-slick";


class Gallery extends React.Component {

    render() {
        var settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: false,
            swipe: false,
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            autoplay: true
        };
        return (
            <Slider {...settings} className={'slider'}>
                <div className="slider-img-container">
                    <img src="./dev/assets/brandItLogoOrange.png" alt="" />
                </div>
                <div className="slider-img-container">
                    <img src="./dev/assets/tshirt.png" alt="" />
                </div>
                <div className="slider-img-container">
                    <img src="./dev/assets/brandItLogoOrange.png" alt="" />
                </div>
                <div className="slider-img-container">
                    <img src="./dev/assets/tshirt.png" alt="" />
                </div>
            </Slider>
        )
    }
};
export default Gallery;

