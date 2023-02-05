import React from 'react';
import './UserAddForm.css';

const wrongNameLabel="Name cannot be empty!"
const wrongEmailLabel="Email should contain '@' and '.'"

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            hasValidationErrors: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    validateData(name,email){
        if(name.trim()==="" || (!email.includes("@") || !email.includes("."))){
            this.errorState(true);
            return false;
        }else{
            this.errorState(false);
            return true;
        }
        // sau pot folosi regex: email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      }

    errorState(value){
        this.setState((prevState)=>{
            return{
                hasValidationErrors:value
            }
        })
        
    }

    render() {
        const {name, email, isGoldClient} = this.state;
        return (
            <form
                className="user-add-form"
                onSubmit={(event) =>{ 
                    event.preventDefault();
                    if(this.validateData(name,email)){
                        console.log("here")
                        this.props.submitAddForm(event, name, email, isGoldClient)
                      }
                }}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">{ this.state.hasValidationErrors===true ? "Name: "+wrongNameLabel : "Name:" }</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">{this.state.hasValidationErrors===true ? "Email: "+wrongEmailLabel : "Email:" }</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;