import React from "react";
import PostItem from "./PostItem";

class PostList extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[]
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data =>{
                data=data.slice(0,4);
                this.setState({posts: data})
            })

    }

    render(){

        return(
            <div>
                <h2>Lista postarilor:</h2>
                {
                    this.state.posts.map((post) => {
                        return <PostItem
                            userId={post.userId}
                            tittle={post.tittle}
                            body={post.body}
                        />
                    })
                }
            </div>
        );
    }

}

export default PostList;