import axios from "axios";

const ApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});


ApiInstance.interceptors.request.use((config) => {
  const token = localStorage?.getItem('token')
  console.log(token, 'token-----')
  config.headers["x-access-token"] = token;
  return config;

});

ApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);
export default ApiInstance;