import { DELETE_USER } from "../actions/deleteUser";
import { LOAD_USERS } from "../actions/loadUsers";
import { SAVE_USER } from "../actions/saveUser";

const initialState = {
  users: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      state = {
        ...state,
        users: [...action.payload],
      };
      break;

    case SAVE_USER:
      state = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          }

          return user;
        }),
      };
      break;

    case DELETE_USER:
      state = {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
      console.log(state, action.payload);
      break;

    default:
      break;
  }


  return state;
}

export default userReducer;
