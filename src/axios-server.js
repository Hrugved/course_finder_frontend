import axios from 'axios';

const instance = axios.create({
    // baseURL:'http://localhost:3000'
    baseURL:'http://ec2-3-80-215-110.compute-1.amazonaws.com/api'
});

export default instance;