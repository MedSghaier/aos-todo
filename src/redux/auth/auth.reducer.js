import authTypes from './auth.types';

const initialState = {
    isAuthenticated: !!localStorage.getItem("isAuthenticated"),
};

export default function authReducer(state = initialState, { type }) {
    switch (type) {
      
      case authTypes.LOGIN:
        return {
          ...state,
          isAuthenticated: true
        };
        case authTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }
      
      default:
        return {...state};
    }
  }