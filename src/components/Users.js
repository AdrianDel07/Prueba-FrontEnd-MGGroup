import Services from "../services/Services";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Page_Users from "../pages/Page_Users";

export default function Users() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  };

  const getData = async () => {
    setLoading(false);
    setError(null);
    try {
      const data = await Services.getAll();
      console.log(data);
      setLoading(false);
      setData(data);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  const handleSearchName = (e) => {
    const inputName = e.target.value;
    console.log(inputName);
    setSearchName(inputName);
  };

  const findUser = async () => {
    setLoading(false);
    setError(null);
    try {
      const data = await Services.findNameUser(searchName);
      console.log(data);
      setLoading(false);
      setData(data);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  return (
    <Page_Users
      data={data}
      currentUser={currentUser}
      setActiveUser={setActiveUser}
      searchName={searchName}
      handleSearchName={handleSearchName}
      findUser={findUser}
      loading={loading}
    />
  );
}
