import axios from 'axios'

// const headers = {
//     withCredentials: true, credentials: 'include'
// }
const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_BACK_END_URL,
    withCredentials: true, 
    credentials: 'include'
})
export default axiosInstance


/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER'
  );
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
  next();
});
*/