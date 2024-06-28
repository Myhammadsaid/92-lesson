import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "https://bazar.ilyosbekdev.uz",
});

export default BaseUrl;
