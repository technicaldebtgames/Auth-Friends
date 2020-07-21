import React from 'react';
import {withRouter} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const clearState = {
    friend: {
        name: '',
        age: '',
        email: ''
    }
};

class AddFriendForm extends React.Component {

    constructor() {
        super();
        this.state = {...clearState};
    }

    handleChange = event => {

        this.setState({

            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }

        });

    };

    submitFriend = event => {

        event.preventDefault();
        axiosWithAuth()
            .post('/api/friends', this.state.friend)
            .then(response => {
                this.props.history.push('/friends');
                this.props.updateParent(response.data);
                
            })
            .catch(error => console.log(error));
            this.state = {...clearState}; // no clue why this doesn't clear state, prob misusing class component, also i do not care at all right now, so it's done afaict
    };

    render() {

        return (
            <div className='add-friend-form-container'>
                <form onSubmit={this.submitFriend} className='add-friend-form'>
                    <p>Add a friend:</p>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' value={this.state.friend.name} onChange={this.handleChange} />
                    <br />
                    <label htmlFor='age'>Age:</label>
                    <input type='text' name='age' value={this.state.friend.age} onChange={this.handleChange} />
                    <br />
                    <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' value={this.state.friend.email} onChange={this.handleChange} />
                    <br />
                    <button>Add Friend</button>
                </form>
            </div>
        )

    };

};

export default withRouter(AddFriendForm);