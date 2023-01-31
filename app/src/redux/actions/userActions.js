export const LOAD_USERS = 'LOAD_USERS';

export const loadUsers = users => {
  return {
    type: LOAD_USERS,
    payload: users,
  };
};

export const DELETE_USER = 'DELETE_USER';

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const SAVE_USER = 'SAVE_USER';

export const saveUser = user => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};
