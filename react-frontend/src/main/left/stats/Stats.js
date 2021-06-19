import { Component } from 'react';
import './Stats.css';



class Stats extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            stat: null
        }
    }

    componentDidMount()
    {
        // get stats
    }

    render()
    {
        return(
            <div id="stats">
                STATS
            </div>
        );
    }
}



export default Stats;