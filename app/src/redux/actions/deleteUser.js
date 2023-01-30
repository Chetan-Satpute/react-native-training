export const DELETE_USER = "DELETE_USER";

function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id,
  };
}

export default deleteUser;
