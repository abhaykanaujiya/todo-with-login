import React from "react";
import {
  getUserName,
  getPassword,
  getPhone,
  signUpSubmit,
} from "../../Actions/AuthAction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  console.log(props, "signup props");
  console.log(props.userDetails, "username ");
 

  const handleSubmit = () => {
  
    props.signUpSubmit(props.username, props.password, props.phone);
    navigate('/');
  };

  return (
    <div className="form-body">
      <div className="form">
        <input
          type="text"
          value={props.username}
          placeholder="Enter something"
          onChange={(e) =>props.getUserName(e)}
        />
        <input
          type="password"
          value={props.password}
          placeholder="Enter password"
          onChange={(e) => props.getPassword(e)}
        />
        <input
          type="number"
          placeholder="phone number"
          value={props.phone}
          onChange={(e) => props.getPhone(e)}
        />
        <button onClick={handleSubmit}>Sign up</button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ AuthReducer }) => {
  const { username, password, phone, userDetails } = AuthReducer;
  return {
    username,
    password,
    phone,
    userDetails,
  };
};

export default connect(mapStateToProps, { getUserName, signUpSubmit ,getPassword,getPhone})(SignUp);
