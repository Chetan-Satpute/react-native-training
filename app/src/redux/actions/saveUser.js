export const SAVE_USER = "SAVE_USER";

function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: user,
  };
}

export default saveUser;
