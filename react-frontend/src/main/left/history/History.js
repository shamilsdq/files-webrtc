import React, { Component } from 'react';
import './History.css';



class History extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            transfers: null
        };
    }

    componentDidMount()
    {
        // get transfers
    }

    render()
    {
        return(
            <div id="history">
                HISTORY
            </div>
        );
    }
}



export default History;