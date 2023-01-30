import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUsers from "./api/getUsers";

import UserCard from "./components/UserCard";
import loadUsers from "./redux/actions/loadUsers";

function App() {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then(users => {
      dispatch(loadUsers(users));
    });
  }, []);

  const userList = users.map((user) => (
    <UserCard
      key={user.id}
      id={user.id}
      name={user.first_name}
      email={user.email}
    />
  ));

  return userList;
}

export default App;
