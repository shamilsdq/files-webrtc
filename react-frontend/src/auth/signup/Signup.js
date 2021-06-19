import { Component } from 'react';
import './Signup.css';



class Signup extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {};
        console.log('signup component created');
    }

    signupHandler()
    {
        this.props.signup("hello", "world");
    }

    render()
    {
        return(
            <button onClick={this.signupHandler.bind(this)}>SIGN UP</button>
        );
    }
}


export default Signup;