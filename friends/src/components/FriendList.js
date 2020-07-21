import React from 'react';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendList extends React.Component {

    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                this.setState({friends: response.data})
                //console.log(this.state);
            })
            .catch(error => console.log(error));
    };

    updateFriendListState = (newFriends) => {
        this.setState({friends: newFriends});
    }

    render() {

        return (

            <div className='friend-list-container'>
                <p>SO NO ONE TOLD YOU LIFE WAS GONNA BE THIS WAY CLAP CLAP CLAP CLAP</p>
                {this.state.friends.map(friend => 
                    <Friend friend={friend} key={friend.id} /> )}
                <AddFriendForm updateParent={this.updateFriendListState}/>
            </div>

        )
    
    };

};

export default FriendList;