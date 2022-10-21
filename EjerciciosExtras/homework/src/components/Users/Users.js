import React, { Component } from "react";
import { getAllUsers } from "../../actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Users.css';

export class Users extends Component {


  render() {

    return (
    
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>   
        <ul>
        {this.props.users.map((user) => <li key={user.id}>
        <Link to={`/users/${user.id}/posts`} className="button">Posts</Link>
        </li>)}
        </ul>    
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
    users: state.users,
})


export const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);