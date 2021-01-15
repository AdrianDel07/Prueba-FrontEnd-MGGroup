import api from "../api";

// GET /public-api/users/
const getAll = async () => {
  const response = await api.get("/users");
  const data = await response.data;
  return data.data;
};

// POST /public-api/users
const newUser = (data) => {
  console.log(data);
  return api.post("/users", data);
};

// GET /public-api/users/123
const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  const data = await response.data;
  console.log(response);
  return data.data;
};

// PUT /public-api/users/123
const putUser = (id, data) => {
  return api.put(`/users/${id}`, data);
};

// DELETE /public-api/users/123
const removeUser = (id) => {
  return api.delete(`/users/${id}`);
};

// SEARCH USER /public-api/users/?name=Name
const findNameUser = async (name) => {
  const response = await api.get(`/users/?name=${name}`);
  const data = await response.data;
  console.log(data);
  return data.data;
};

export default {
  getAll,
  newUser,
  getUser,
  putUser,
  removeUser,
  findNameUser,
};
