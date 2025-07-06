import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "627fa4dd1ae44925960517e9f8e357a5",
  },
});
