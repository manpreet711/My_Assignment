import axios from "axios";

export default axios.create({
  //while running locally
  //Run npm run vite and change the base url to local url http://127.0.0.1:5173/
  //to perform update and delete operation on contact as i coudnt find an service to
  //host json file and perform updatee/delete operation
  baseURL: "https://api.npoint.io/470cd19f04f0c20c5d1c/",
});
