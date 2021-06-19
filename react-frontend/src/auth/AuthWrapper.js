import { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './AuthWrapper.css';

import Signup from './signup/Signup';
import Signin from './signin/Signin';



class AuthWrapper extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        if (this.props.auth.id != null)
            return <Redirect to="/home"/>

        return(
            <div>
                <BrowserRouter>
                    <Route exact path="/signup">
                        <Signup signup={this.props.signup}/>
                    </Route>
                    <Route exact path="/signin">
                        <Signin signin={this.props.signin}/>
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}


export default AuthWrapper;