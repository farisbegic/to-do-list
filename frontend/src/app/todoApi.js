import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

export default axios.create({
    baseURL: REACT_APP_BACKEND_URL ? REACT_APP_BACKEND_URL : "https://localhost:5001"
})