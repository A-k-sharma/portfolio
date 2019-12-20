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
                            A Fullstack web developer, working as a freelancer. Also a tech enthusiast trying to learn about technologies and exploring them atmost. I am in the development field since 2018 and since then I am learing everyday.
                            technologies like Augmented reality and virtual reality have fascinated me the most. I love making new designs, playing with colors, creating new solutions and loves to .
                            everything that I make has a Perfection inbuilt and with perfection there also comes "Quality" of Supreme Class.
                        </p>
                    </div>
                    <SocialIcons/>
                </div>
            </div>
        </div>
    )
}

export default About