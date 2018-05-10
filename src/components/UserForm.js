import React, {Component} from 'react';

export default class UserForm extends Component {
   render() {
      return (
         <form onSubmit={this.props.onAddUser}>
            <input type="text" placeholder="Name" name="name"/>
            <input type="email" placeholder="Email" name="email"/>
            <input type="submit" value="Submit"/>
         </form>
      );
   }
}