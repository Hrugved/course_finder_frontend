import axios from 'axios';

const instance = axios.create({
    // baseURL:'http://localhost:3000'
    baseURL:'https://courses-navigator.herokuapp.com'
});

export default instance;