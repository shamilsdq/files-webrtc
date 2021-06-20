import { Component } from 'react';
import { Link } from 'react-router-dom';
import './SigninForm.css';



class SigninForm extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            username_input: '',
            password_input: ''
        };
    }

    signinHandler()
    {
        // validation
        // ...

        // call signin method of app
        this.props.signin(this.state.username_input, this.state.password_input);
    }

    render()
    {
        return(
            <section id="signin_form">
                <label htmlFor="signin_username_input">USERNAME</label>
                <input type="text" id="signin_username_input" namee="signin_username_input" placeholder="username"
                    value={this.state.username_input} onChange={(e) => this.setState({ username_input: e.target.value })}/>
                <label htmlFor="signin_password_input">PASSWORD</label>
                <input type="password" id="signin_password_input" name="signin_password_input" placeholder="password"
                    value={this.state.password_input} onChange={(e) => this.setState({ password_input: e.target.value })}/>
                <button onClick={this.signinHandler.bind(this)}>SIGN IN</button>

                <span>
                    <Link to="/signup">Create an account &rarr;</Link>
                </span>
            </section>
        );
    }
}


export default SigninForm;