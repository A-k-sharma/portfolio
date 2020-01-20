import React from 'react';
import Profile from '../assets/profile.jpg';
import SocialIcons from './socialIcons';


function About() {
    return (
        <div className="about">
            <div className='heading'>
                <h3>ABOUT</h3>
            </div>
            <div className='row'>
                <div className='about-left col-md-4'>
                    <div className="image-container">
                        {/* <img className='profile' src={Profile} alt="profile-image"/> */}
                    </div>
                </div>
                <div className="about-right col-md-8">
                    <div className='about-text'>
                        <p>
                            <span>Hey,</span>
                            <span>I'm a fullstack developer based in Gurugram, India.</span>
                            <span>I have passion for developing ideas into reality.</span>

                        </p>
                    </div>
                    <SocialIcons/>
                </div>
            </div>
        </div>
    )
}

export default About