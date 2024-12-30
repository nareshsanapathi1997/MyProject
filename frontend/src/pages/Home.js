import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../pages/Home.css"; // Optional: Use this for additional styling
import img01 from '../assets/img01.jpg';
import img02 from '../assets/img02.jpg';
import img03 from '../assets/img03.jpg';
import img04 from '../assets/img04.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const Home = ({ darkMode }) => {
    const slides = [
        {
            image: require("../assets/img1.jpg"),
            header: "Welcome to Nature",
            quote: " - Discover the beauty of the world around you.",
        },
        {
            image: require("../assets/img2.jpg"),
            header: "Explore Adventures",
            quote: " - Step outside and embrace the thrill of discovery.",
        },
        {
            image: require("../assets/img3.jpg"),
            header: "Experience Serenity",
            quote: " - Find peace in the quiet moments of life.",
        },
        {
            image: require("../assets/img4.jpg"),
            header: "Capture Memories",
            quote: " -Every picture tells a story worth remembering.",
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className={`home-container ${darkMode ? "dark" : ""}`}>
            <div className="slider-container">
                <Slider {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="image-wrapper">
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="slider-image"
                            />
                            <div
                                className={`content-overlay ${darkMode ? "dark-overlay" : ""}`}
                            >
                                <h2 className="content-header">{slide.header}</h2>
                                <p className="content-quote">{slide.quote}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-3">
                        <div className="card">
                            <img src={img01} className="card-img-top" alt="Nature" /> 
                            <div className="card-body">
                                <h5 className="card-title">Welcome to Nature</h5>
                                <p className="card-text">
                                    Discover the beauty of the world around you.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-3">
                        <div className="card">
                            <img src={img02} className="card-img-top" alt="Nature" />
                            <div className="card-body">
                                <h5 className="card-title">Explore Adventures</h5>
                                <p className="card-text">- Step outside and embrace the thrill of discovery.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-3">
                        <div className="card">
                            <img src={img03} className="card-img-top" alt="Nature" />
                            <div className="card-body">
                                <h5 className="card-title">Experience Serenity</h5>
                                <p className="card-text">- Find peace in the quiet moments of life.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-3 mb-5">
                        <div className="card">
                            <img src={img04} className="card-img-top" alt="Nature" />
                            <div className="card-body">
                                <h5 className="card-title">Capture Memories</h5>
                                <p className="card-text">- Every picture tells a story worth remembering.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-md-3 mb-5">
                        <div className="card">
                            <img src={img3} className="card-img-top" alt="Nature" />
                            <div className="card-body">
                                <h5 className="card-title">Capture Memories</h5>
                                <p className="card-text">Find peace in the quiet moments of life.
                                Every picture tells a story worth remembering.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-md-3 mb-5">
                        <div className="card">
                            <img src={img4} className="card-img-top" alt="Nature" />
                            <div className="card-body">
                                <h5 className="card-title">Capture Memories</h5>
                                <p className="card-text">-  Step outside and embrace
                                    the thrill of discovery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
