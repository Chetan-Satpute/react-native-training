
export const LOAD_USERS = 'LOAD_USERS';

function loadUsers(users) {
  return {
    type: LOAD_USERS,
    payload: users,
  }
}

export default loadUsers;

