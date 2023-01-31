import {DELETE_USER, LOAD_USERS, SAVE_USER} from '../actions/userActions';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: [...action.payload],
      };

    case SAVE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
            return action.payload;
          }

          return user;
        }),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };

    default:
      break;
  }

  return state;
};

export default userReducer;
