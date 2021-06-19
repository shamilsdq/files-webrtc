import { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return(
            <div id="navbar">
                <h1>
                    <Link to="/home">SECURE FILE</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/history">HISTORY</Link>
                    </li>
                    <li>
                        <Link to="/profile">PROFILE</Link>
                    </li>
                    <li>
                        <Link to="/signin" onClick={this.props.signout.bind(this)}>LOGOUT</Link>
                    </li>
                </ul>
            </div>
        );
    }
}



export default NavBar;