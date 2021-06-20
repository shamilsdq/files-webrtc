import { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';



class SignupForm extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            username_input: '',
            password_input: '',
            confirm_password_input: '',
        };
        console.log('signupform component created');
    }

    signupHandler()
    {
        // validation
        // ...

        // call signin method of app
        this.props.signup(this.state.username_input, this.state.password_input);
    }

    render()
    {
        return(
            <section id="signup_form">
                <label htmlFor="signup_username_input">USERNAME</label>
                <input type="text" id="signup_username_input" namee="signup_username_input"
                    value={this.state.username_input} onChange={(e) => this.setState({ username_input: e.target.value })}/>
                <label htmlFor="signup_password_input">PASSWORD</label>
                <input type="password" id="signup_password_input" name="signup_password_input"
                    value={this.state.password_input} onChange={(e) => this.setState({ password_input: e.target.value })}/>
                <label htmlFor="signup_confirm_password_input">CONFIRM PASSWORD</label>
                <input type="password" id="signup_confirm_password_input" name="signup_confirm_password_input"
                    value={this.state.confirm_password_input} onChange={(e) => this.setState({ confirm_password_input: e.target.value })}/>
                <button onClick={this.signupHandler.bind(this)}>CREATE ACCOUNT</button>

                <span>
                    <Link to="/signin">Sign in &rarr;</Link>
                </span>
            </section>
        );
    }
}


export default SignupForm;