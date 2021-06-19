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
    }

    render()
    {
        return(
            <div id="right_wrapper">
                <TransferForm auth={this.props.auth}/>
            </div>
        );
    }
}



export default RightWrapper;