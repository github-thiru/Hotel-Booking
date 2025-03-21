import React from 'react';
import "./Mainpage.css"
const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="header-section">
                <h1>WELCOME TO HOTEL HAVEN</h1>
                <p className="subtitle">A modern hotel in downtown Hotel Haven</p>
                <p className="description">
                    The newly transformed Hotel Haven bursts with style and elegance,
                    now standing as one of the most captivating hotels in the heart of the city.
                </p>
                {/* <button className="book-btn">BOOK NOW</button> */}
            </div>

            <div className="image-gallery">
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIP.OJMd58FhGIqOVTPnbt9DtAHaDp?rs=1&pid=ImgDetMain" alt="Lobby" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIP.bGAyWPtzBzbGxxJdH6PopgHaEo?rs=1&pid=ImgDetMain" alt="Luxury Hotel" />
                </div>
                <div className="image-card">
                    <img src="https://png.pngtree.com/background/20230526/original/pngtree-elegant-modern-living-room-with-black-and-gray-furniture-picture-image_2751836.jpg" alt="Luxury Hotel" />
                </div>
            </div>

            <div className="info-section">
                <h2>NEWLY RENOVATED AND INTIMATELY RESIDENTIAL</h2>
            </div>
        </div>
    );
};

export default LandingPage;
