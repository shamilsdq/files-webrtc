import { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './MainWrapper.css';

import LeftWrapper from './left/LeftWrapper';
import RightWrapper from './right/RightWrapper';



class MainWrapper extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        if (this.props.auth.id == null)
            return <Redirect to="/signin"/>

        return(        
            <div id="main_wrapper">
                <LeftWrapper auth={this.props.auth} signout={this.props.signout}/>
                <RightWrapper auth={this.props.auth}/>
            </div>
        );
    }
}



export default MainWrapper;