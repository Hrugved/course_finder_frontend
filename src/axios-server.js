import axios from 'axios';

const instance = axios.create({
    // baseURL:'http://localhost:3000'
    baseURL:'http://ec2-54-165-91-173.compute-1.amazonaws.com/api'
});

export default instance;