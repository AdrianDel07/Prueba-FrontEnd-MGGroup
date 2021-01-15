import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Services from "../services/Services";
import FormPostUser from "../containers/FormPostUser";

export default function PostUser() {
  const history = useHistory();
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
    Services.newUser(data);
    alert("Successful registration");
    history.push("/users");
  };
  console.log(user);
  return (
    <div>
      <FormPostUser
        handlePostSubmit={handlePostSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}
