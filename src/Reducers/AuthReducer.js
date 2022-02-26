import {
  USER_NAME,
  PASSWORD,
  PHONE,
  SIGN_UP_SUBMIT,
} from "../Constants/Constants";
const INITIAL_STATE = {
  username: "",
  password: "",
  phone: "",
  isLogin: false,
  userDetails: { name: "abhay", password: "abhay", phone: "123" },
};
const AuthReducer = (state = INITIAL_STATE, action) => {
  console.log(action, "actions auth reducer");
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case SIGN_UP_SUBMIT:
      return {
        ...state,
        userDetails:action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;
