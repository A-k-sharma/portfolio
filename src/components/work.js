import React,{ useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projectData from 'projectData.json';
import ProjectTemplate from './projectTemplate';


function Work(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className='work'>
            <div className='heading'>
                <h3>WORKS</h3>
            </div>
            <div className='sampleWork'>
            <Carousel
                additionalTransfrom={0}
                arrows
                centerMode
                containerClass="container"
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
                >
                    {
                        projectData.map(item=>{
                            <ProjectTemplate item={item}/>
                        })
                    }
                    
                </Carousel>
            </div>
        </div>
    )
}

export default Work;
