import { Component } from "react";
import './TransferForm.css';



class TransferForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            peer: '',
            file: ''
        };
    }

    send()
    {
        console.log(this.state.peer);
        console.log(this.state.file);
        console.log('send button clicked');
    }

    render()
    {
        return(
            <section id="transfer_form">
                <label htmlFor="peer_input">USER</label>
                <input type="text" id="peer_input" name="peer_input" placeholder='receiver username'
                    onChange={(e) => this.setState({ peer: e.target.value })}/>
                <label htmlFor="file_input">FILE</label>
                <input type="file" id="file_input" name="file_input"
                    onChange={async (e) => this.setState({ file: e.target.files[0] })}/>
                <button onClick={this.send.bind(this)}>START TRANSFER</button>
            </section>
        );
    }
}



export default TransferForm;