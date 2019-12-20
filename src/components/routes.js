import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './home'
import About from './about'
import Work from './work'
import Contact from './contact'


function routes() {
    return (
        <div className="mainContent">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/work' component={Work}/>
                <Route path='/contact' component={Contact}/>

            </Switch>
        </div>
       
    )
}

export default routes;
