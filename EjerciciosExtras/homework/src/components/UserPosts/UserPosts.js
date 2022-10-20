import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from "../../actions";
import './UserPosts.css';


export class UserPosts extends React.Component {

  componentDidMount(){
    const userid = this.props.match.params.id;
    this.props.getAllUserPosts(userid)
  }

  render() {
    const USER_ID = this.props.id
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {USER_ID}</h4>
        
      </div>
    )
  }
}


export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts,
  };
}

export function mapDispatchToProps(dispatch) {
    return {
        getAllUserPosts: (id) => dispatch(getAllUserPosts(id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPosts);