import axios from "axios";

const api = axios.create({
  baseURL: "https://iotmid-docker.cpqd.com.br/blockchain/api"
});

export default api;
