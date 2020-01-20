import React from 'react';

function Skill() {
    return (
        <div className='skill'>
            <div className='heading'>
                <h3>Skills</h3>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Languages</h5>
                        </div>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Sass</li>
                            <li>SQL</li>
                            <li>Bash</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Frameworks</h5>
                        </div>
                        <ul>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Vue.js</li>
                            <li>Mocha/Chai</li>
                            <li>Enzyme/Jest</li> 
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Others</h5>
                        </div>
                        <ul>
                            <li>HTTP / REST / OAuth2 / API Development</li>
                            <li>MongoDB</li>
                            <li>Git / Unit Testing / CI</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;
