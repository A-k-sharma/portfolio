import React from 'react';
import Left from '../assets/left.png';
import Right from '../assets/right.png';
import SocialIcons from './socialIcons';


function Home() {
    return (
        <div className='homePage'>
            <div className="navPlaceholder">
                
            </div>
            <div className="headings">
                <img src={Left} alt={'aaa'}/>
                <h1>Ashu Kumar Sharma </h1>
                <img src={Right} alt={'aaa'}/>
            </div>
            <h4>FullStack Developer</h4>
            {/* <div className="buttons">
                <button className="btn">
                    Download Resume
                </button>
            </div> */}
            <SocialIcons/>
        </div>
    )
}

export default Home;
