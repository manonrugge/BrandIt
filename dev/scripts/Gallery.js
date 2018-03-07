<<<<<<< HEAD
import React from 'react';
import Slider from 'react-image-slider';

export default React.createClass({
    render() {
        const images = [
            '//placehold.it/600/1abc9c',
            '//placehold.it/600/3498db',
            '//placehold.it/600/2ecc71',
            '//placehold.it/600/9b59b6',
            '//placehold.it/600/f1c40f',
            '//placehold.it/600/e74c3c',
            '//placehold.it/600/e67e22',
        ];
=======
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
                    <img src="./dev/assets/slider-01.jpg" alt="" />
                </div>
                <div className="slider-img-container">
                    <img src="./dev/assets/slider-02.jpg" alt="" />
                </div>
                <div className="slider-img-container">
                    <img src="./dev/assets/slider-03.jpg" alt="" />
                </div>
            </Slider>
        )
    }
};
export default Gallery;
>>>>>>> 2792b358860b6eb1b47dac52fcf77d1eda1dcdaa

        return (
            <Slider images={images} isInfinite delay={5000}>
                {images.map((image, key) => <div key={key}><img src={image} /></div>)}
            </Slider>
        );
    }
});