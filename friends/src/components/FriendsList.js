import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
        // console.log(this.state.friendsList);
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res);
                this.setState({
                    friendsList: res.data
                });
            })
            .catch(err => {
                console.log("error: ", err.response);
            })
    };

    formatData = () => {
        const friends = [];
                console.log(this.state.friendsList);
        this.state.friendsList.forEach((friend, index) => {
            friends.push({
                id: index,
                name: friend.name,
                age: friend.age,
                email: friend.email
            });
        });
        return friends;
    };

    render() {
        const friendsList = this.formatData();
        return (
            <div className="friends-list">
                <div className="title-wrapper">
                    <div className="title">
                        <div></div>
                    </div>
                </div>
                {friendsList.length > 0 && (
                    <div className="friends-wrapper">
                        <div>
                            {friendsList.map(friend => (
                                <div key={friend.id} className="friend-thing">
                                    <p>{friend.name}</p>
                                    <p>{friend.age}</p>
                                    <p>{friend.email}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default FriendsList;