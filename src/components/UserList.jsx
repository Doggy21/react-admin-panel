import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {


    render(){
        return (
            <div>
                <h2>Lista utilizatorilor:</h2>
                { this.props.users.map((user, index) => {
                    
                    return<div>
                    <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        address={ user.address }
                        key={ index }
                    />
                    <button onClick={
                        () => this.props.removeUser(user.id)
                        }>Delete</button>
                    </div>
                })}
                
            </div>
        );
    }
}

export default UserList;