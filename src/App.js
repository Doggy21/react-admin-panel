import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/post/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      users: [],
      textColor: 'black'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});

      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeTextColor(event){
    this.setState({textColor: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  removeUser(id){
    this.setState((prevState)=>{
      return{
        users: prevState.users.filter(user => user.id!==id)
      }
    } )
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();

    let address={
      city:"NoCity",
      zipcode:"NoZipcode"
    };
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            address
          }
        ]
      }
    });
  }



  render(){
    // Added color change feature for text
    return(
      <div className="app" style={{background: this.state.background, color: this.state.textColor} }>
        <h1>Admin panel - Proiectul 1</h1>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
        <UserList users={this.state.users} removeUser={(id)=>this.removeUser(id)}/>
        <PostList/>
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <input type="color" onChange={(event) => this.changeTextColor(event)}/>
      </div>
    );

  }
}

export default App;
