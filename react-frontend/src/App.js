import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import AuthWrapper from './auth/AuthWrapper';
import MainWrapper from './main/MainWrapper';



class App extends Component
{
    constructor(props)
    {
        super(props);
        var auth_id = localStorage.getItem('auth_id');
        var auth_username = localStorage.getItem('auth_username');
        var auth_token = localStorage.getItem('auth_token');

        this.state = {
            auth: {
                id: auth_id,
                username: auth_username,
                token: auth_token
            }
        };
    }

    signup(username, password)
    {
        this.setState({
            auth: {
                id: 1,
                username: "username",
                token: "jwt.token.here"
            }
        });
    }

    signin(username, password)
    {
        var id = 1, username = "username", token = "jwt.token.here";
        localStorage.setItem('auth_id', id);
        localStorage.setItem('auth_username', username);
        localStorage.setItem('auth_token', token);
        this.setState({
            auth: {
                id: id,
                username: username,
                token: token
            }
        });
    }

    signout()
    {
        this.setState({
            auth: {
                id: null,
                username: null,
                token: null
            }
        });

        localStorage.removeItem('auth_id');
        localStorage.removeItem('auth_username');
        localStorage.removeItem('auth_token');
    }

    render()
    {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={['/signup', '/signin']}>
                        <AuthWrapper auth={this.state.auth} signup={this.signup.bind(this)} signin={this.signin.bind(this)}/>
                    </Route>
                    <Route path="/error">
                        <div>ERROR COMPONENTS HERE WITH NESTED ROUTING LIKE /error/404 or /error/500</div>
                    </Route>
                    <Route path="/">
                        <MainWrapper auth={this.state.auth} signout={this.signout.bind(this)}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }

}


export default App;