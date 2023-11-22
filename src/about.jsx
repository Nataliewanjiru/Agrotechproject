import React from 'react';
import './about.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Navbar';


const AboutUs = () => {
    return (
        <section className="about-us">
            <Navbar/>
            <div className="container">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        At Agro Tech, we're passionate about sustainable agriculture and providing a platform for farmers to manage their records and access help from advisors. 
                        With over Three years of experience, we've cultivated a deep understanding of the land and the crops we grow.
                    </p>
                    <p>
                        Our mission is to promote responsible farming practices that prioritize environmental stewardship and the well-being of  farmers.
                        We believe that by working in harmony with nature, we can produce high-quality, nutritious crops that benefit both farmers and the planet through proper record Management.
                    </p>
                    <p>
                        From our humble beginnings as a small family Organization, we've grown into a thriving agricultural enterprise that serves the World, Africa and Kenya.
                        We take pride in the quality of our Proper Record Keeping and the relationships we've built with our customers over the years.
                    </p>
                    <p>
                        Meet our dedicated team of farmers, agronomists, and support staff who work tirelessly to ensure that every crop we produce meets our high standards.
                    </p>
                </div>
            </div>
            <div className='Photos'>
                <img src="https://i.pinimg.com/564x/eb/7d/9b/eb7d9b05784b671ec6cf83474513d187.jpg" alt="muddy gumboots" />
                <img src="https://i.pinimg.com/564x/bb/bb/dc/bbbbdcc3673e13a12be1ed13583e92b3.jpg" alt="Farmers" />
                <img src="https://i.pinimg.com/564x/44/c4/e4/44c4e4ce996873c26842b0752cdba6b7.jpg" alt='tractor'/>
            </div>
            <div className='box23'></div>
            <div className='triangle56'></div>
        </section>
    );
};

export default AboutUs;
