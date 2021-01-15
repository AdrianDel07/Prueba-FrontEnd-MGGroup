import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Services from "../services/Services";
import Page_UserDetails from "../pages/Page_UserDetails";

export default function UserDetails() {
  const history = useHistory();
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const response = await Services.getUser(userId);
      console.log(response);
      setUser(response);
    } catch (e) {
      console.error(e);
    }
  };
  const deleteUser = () => {
    Services.removeUser(user.id)
      .then((res) => {
        alert("Success Delete");
        history.push("/users");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <Page_UserDetails user={user} deleteUser={deleteUser} />
    </div>
  );
}
