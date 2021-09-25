import axios from "axios";
import { USER_TYPES } from "../types";
import config from "../config";

function fetchUsers() {
  const request = axios.get(`${config.JSONPLACEHOLDER_BASE_URL}/users`);
  (request);
  return {
    type: USER_TYPES.FETCH_USERS,
    payload: request
  }; 
}

export default {
    fetchUsers
}