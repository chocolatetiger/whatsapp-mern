import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-mern-rag.herokuapp.com",
});

export default instance;
