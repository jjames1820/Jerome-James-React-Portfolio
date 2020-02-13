import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavigationContainer extends Component{
constructor(){
    super();
}

    render(){
        return(
            <div>
                <NavLink exact to="/">
                    Home
                </NavLink>

                <NavLink to="/works">
                    Works
                </NavLink>

                <NavLink to="/donate">
                    Donate
                </NavLink>
                    
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </div>
        )
    }
}