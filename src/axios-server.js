import axios from 'axios';

const instance = axios.create({
    // baseURL:'http://localhost:3000'
    baseURL:'http://ec2-35-175-197-64.compute-1.amazonaws.com/api'
});

export default instance;