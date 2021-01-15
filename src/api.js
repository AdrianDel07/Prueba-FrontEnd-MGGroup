import axios from "axios";

const BASE_URL = "https://gorest.co.in/public-api";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
});
