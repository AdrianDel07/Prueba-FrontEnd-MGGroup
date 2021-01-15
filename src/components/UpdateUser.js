import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Services from "../services/Services";
import FormUpdateUser from "../containers/FormUpdateUser";

export default function UpdateUser() {
  const history = useHistory();
  const { userId } = useParams();
  const initialState = {
    name: "",
    email: "",
    gender: "",
    status: "",
  };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(e.target.value);
  };
  const handlePostSubmit = () => {
    let data = {
      name: user.name,
      email: user.email,
      gender: user.gender,
      status: user.status,
    };
    Services.putUser(userId, data);
    alert("Successful Update");
    history.push("/users");
  };
  console.log(user);
  return (
    <div>
      <FormUpdateUser
        handlePostSubmit={handlePostSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}
