import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0fc43ddbb496427f8e9b63ffdae98b5b",
  },
});
