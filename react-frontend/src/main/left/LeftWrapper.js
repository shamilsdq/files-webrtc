import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './LeftWrapper.css';

import NavBar from './navbar/NavBar';
import Stats from './stats/Stats';
import History from './history/History';
import Profile from './profile/Profile';



class LeftWrapper extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return(
            <div id="left_wrapper">
                <NavBar signout={this.props.signout}/>
                <Switch>
                    <Route exact path="/history">
                        <History auth={this.props.auth}/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile auth={this.props.auth}/>
                    </Route>
                    <Route exact path={['/', '/home']}>
                        <Stats auth={this.props.auth}/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/error"/>
                    </Route>
                </Switch>
            </div>
        );
    }
}



export default LeftWrapper;