import { useState } from "react";
import { useDispatch } from "react-redux";
import deleteUser from "../redux/actions/deleteUser";
import saveUser from "../redux/actions/saveUser";

function UserCard(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);

  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveUser({ id: props.id, first_name: name, email: email }));
  };

  const handleDelete = () => {
    dispatch(deleteUser(props.id));
  };

  if (edit) {
    return (
      <div className="p-2 bg-blue-300 m-2 rounded-md shadow-md">
        <div className="flex flex-col">
          <input
            className="font-bold"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="font-bold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="p-1 flex justify-between">
          <div>
            <button
              className="bg-red-500 text-white rounded-md p-1 hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 text-white rounded-md p-1 hover:bg-blue-700"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
          <button
            className="bg-red-500 text-white rounded-md p-1 hover:bg-red-700"
            onClick={() => setEdit(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 bg-blue-300 m-2 rounded-md shadow-md">
      <h1 className="font-bold">{props.name}</h1>
      <p className="font-mono">{props.email}</p>

      <div className="p-1">
        <button
          className="bg-red-500 text-white rounded-md p-1 hover:bg-red-700"
          onClick={() => setEdit(!edit)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default UserCard;
