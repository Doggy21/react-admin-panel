import React from 'react';


function UserItem(props) {
    const {name, email, isGoldClient, address} = props;


    // Added city and zipcode from address as extra properties
    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p>{ address.city }</p>
            <p>{address.zipcode}</p>
        </div>
    );
}

export default UserItem;