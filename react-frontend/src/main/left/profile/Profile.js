import { Component } from "react";
import './Profile.css';



class Profile extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            profile: null
        };
    }

    componentDidMount()
    {
        // get profile details
    }

    render()
    {
        return(
            <div id="profile">
                PROFILE: {this.props.auth.token}
            </div>
        );
    }
}



export default Profile;