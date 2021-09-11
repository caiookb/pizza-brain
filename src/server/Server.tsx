import { Request } from "../models/RequestModel";
const urlPrefix = "https://api.pizzabrain.com/api/";

const url = (path: []) => {
  return urlPrefix.concat(path.join("/"));
};

export default (config: Request) => {
  const { method, path, body } = config;
  const opt = {
    method,
    data: body,
  };
  // I would use fetch native API or Axios for HTTP requests
  return fetch(url(path), opt)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
};
