import { Component } from 'react';
import './Signin.css';



class Signin extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    signinHandler()
    {
        this.props.signin("hello", "world");
    }

    render()
    {
        return(
            <button onClick={this.signinHandler.bind(this)}>SIGN IN</button>
        );
    }
}


export default Signin;