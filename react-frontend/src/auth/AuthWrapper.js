import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './AuthWrapper.css';

import SignupForm from './signupform/SignupForm';
import SigninForm from './signinform/SigninForm';



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
            <div id="auth_wrapper">
                <section id="auth_form_wrapper">
                    <Switch>
                        <Route exact path="/signup">
                            <h2>SIGN UP</h2>
                            <SignupForm signup={this.props.signup}/>
                        </Route>
                        <Route exact path="/signin">
                            <h2>SIGN IN</h2>
                            <SigninForm signin={this.props.signin}/>
                        </Route>
                    </Switch>
                </section>
                <section id="auth_hero">
                    <h1>Peer to Peer.</h1>
                    <h1>Encrypted.</h1>
                    <h1>Free.</h1>
                </section>
            </div>
        );
    }
}


export default AuthWrapper;