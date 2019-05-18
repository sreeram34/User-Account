import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './Components/contactAction';

class App extends Component {

  constructor(props){
    super(props);     
    this.state = {
      firstName: '',
      lastName: '',
      userName:'',
      email:'',
      password:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name] : value
    });
  }
  
  handleSubmit(e){
    e.preventDefault();
    let contact= {
      name: this.state
    }
    this.setState({
      name: ''
    });
    this.props.createContact(contact);   
    console.log(this.state);
    console.log(contact);
    alert("Form submitted successfully");
  }

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <table className="table">
                        <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Email</th>
                        </tr>
                        </thead>  
                        <tbody>                      
                                <tr key={index}>
                                    <td>{ data.firstName }</td>
                                    <td>{ data.lastName }</td>
                                    <td>{ data.userName }</td>
                                    <td>{ data.email }</td>
                                </tr>
                        </tbody>
            </table>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.updateContact(e, index)} className="btn btn-danger">
            Update
          </button>
        </div>
    </div> 
    )
  }

  updateContact(e, index){
    e.preventDefault();
    this.props.updateContact(index);
  }

  render() {
    return(
      <div className="container">
        <h1>User Details</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter First Name" name="firstName" onChange={this.handleChange}  defaultValue={ this.state.firstName } /><br />
            <input type="text" placeholder="Enter Last Name" name="lastName" onChange={this.handleChange}  defaultValue={ this.state.lastName } /><br />
            <input type="text" placeholder="Enter User Name" name="userName" onChange={this.handleChange}  defaultValue={ this.state.userName } /><br />
            <input type="text" placeholder="Enter Email" name="email" onChange={this.handleChange}  defaultValue={ this.state.email } /><br />
            <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange}  defaultValue={ this.state.password } /><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />  
          <table className="table">
                        <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Email</th>
                        </tr>
                        </thead>  
                        <tbody>            
                                <tr>
                                    <td>{ this.state.firstName }</td>
                                    <td>{ this.state.lastName }</td>
                                    <td>{ this.state.userName }</td>
                                    <td>{ this.state.email }</td>
                                </tr>
                        </tbody>
            </table>  
    
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    updateContact: index =>dispatch(contactAction.updateContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);