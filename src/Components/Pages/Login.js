import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.css";
import { getUserName,getPassword } from "../../Actions/AuthAction";
export const Login = (props) => {
  const handleSubmit = () => {
    // if (props.userDetail.name === props.username && props.userDetail.password === props.password) {
    //   alert("login successful");
    // }
    console.log(props.username,props.password,"submit click");
  };

  return (
    <div className="form-body">
      <div className="form">
        <input
          type="text"
          value={props.username}
          placeholder="Enter something"
          onChange={(e) => props.getUserName(e)}
        />
        <input
          type="password"
          value={props.password}
          placeholder="Enter password"
          onChange={(e) => props.getPassword(e)}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
      <div>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
};
const mapStateToProps = (AuthReducer) => {
  const { username, password, isLogin, userDetail } = AuthReducer;
  return {
    username,
    password,
    isLogin,
    userDetail,
  };
};

export default connect(mapStateToProps, { getUserName, getPassword })(Login);
