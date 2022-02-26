import {
  USER_NAME,
  PASSWORD,
  PHONE,
  SIGN_UP_SUBMIT,
} from "../Constants/Constants";
export const getUserName = (e) => {
  console.log(e.target.value, "get user name action");
return (dispatch) => {
    dispatch({ type: USER_NAME, payload: e.target.value });
  };
};
export const getPassword = (e) => {
  console.log(e.target.value, "get pss action");
return (dispatch) => {
    dispatch({ type: PASSWORD, payload: e.target.value });
  };
};

export const getPhone = (e) => {
  console.log(e.target.value, "get ph action");
 return (dispatch) => {
    dispatch({ type: PHONE, payload: e.target.value });
  };
};

export const signUpSubmit = (username, password, phone) => {
  console.log(username, password, phone, "signup submit actions");
  return (dispatch) => {
    const data = {
      name: username,
      password: password,
      phone: phone,
    };
    console.log(data, "data");
    dispatch({ type: SIGN_UP_SUBMIT, payload: data });
  };
};
