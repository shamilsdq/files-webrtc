import { Component } from 'react';
import './RightWrapper.css';

import TransferForm from './transferform/TransferForm';



class RightWrapper extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            peer: null,
            file: null
        };
        console.log(this.props.auth);
    }

    render()
    {
        return(
            <div id="right_wrapper">
                <h2>FILE TRANSFER</h2>
                <TransferForm auth={this.props.auth}/>
            </div>
        );
    }
}



export default RightWrapper;