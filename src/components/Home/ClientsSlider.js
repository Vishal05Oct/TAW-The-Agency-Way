import React, { useEffect, useRef, useState } from 'react';
import './PartnerSlider.css';
import BastonLevin from "../../assets/images/home-clients/baston-levin.png";
import Bruxie from "../../assets/images/home-clients/bruxie.png";
import Flipkart from "../../assets/images/home-clients/flipkart.png";
import Fujiyama from "../../assets/images/home-clients/fujiyama.png";
import Godrej from "../../assets/images/home-clients/godrej.png";
import Honda from "../../assets/images/home-clients/honda.png";
import ICICI from "../../assets/images/home-clients/icici.png";

const Slider = () => {
    const imageSources = [
        { url: BastonLevin, alt: "BastonLevin Logo" },
        { url: Bruxie, alt: "Bruxie Logo" },
        { url: Flipkart, alt: "Flipkart Logo" },
        { url: Fujiyama, alt: "Fujiyama Logo" },
        { url: Godrej, alt: "Godrej Logo" },
        { url: Honda, alt: "Honda Logo" },
        { url: ICICI, alt: "ICICI Logo" },
        { url: Flipkart, alt: "Flipkart Logo" },
    ];

    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    let animationId;

    useEffect(() => {
        const slider = sliderRef.current;

        const slide = () => {
            animationId = requestAnimationFrame(() => {
                if (!isHovered && slider) {
                    slider.scrollLeft -= 2; // Decrementing scrollLeft to slide from right to left
                    if (slider.scrollLeft <= 0) {
                        slider.scrollLeft = slider.scrollWidth / 2;
                    }
                    setCurrentIndex(prevIndex => (prevIndex - 1 + imageSources.length / 2) % (imageSources.length / 2));
                }
                slide();
            });
        };
        slide();
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [imageSources.length, isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="platforms-list mt-5" ref={sliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {imageSources.concat(imageSources).map((image, index) => (
                <div className="slider-list-item" key={index}>
                    <img className='service-card' src={image.url} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default Slider;
