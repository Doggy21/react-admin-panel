import React from "react";

function PostItem(props){
    const {userId, id, tittle, body}=props;

    return(<div>
        <h2>{userId}</h2>
        <h3>{tittle}</h3>
        <p>{body}</p>

    </div>);

}

export default PostItem;