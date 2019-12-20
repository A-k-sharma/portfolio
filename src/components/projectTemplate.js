import React from 'react';

function ProjectTemplate(props) {
    return (
        <div>
        <div class="card" style={{"width": "18rem;"}}>
            <img class="card-img-top" src={props.item.image} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{props.item.title}</h5>
            </div>
        </div>
        <div style={{"width": "5rem;"}}>

        </div>
        </div>
    )
}

export default ProjectTemplate;
