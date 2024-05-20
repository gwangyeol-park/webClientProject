import axios from "axios";

// item Data를 받아오는 api의 url
const USER_LOGIN_URL = 'http://localhost:8080/login';
const USER_SIGNUP_URL = 'http://localhost:8080/signup';
const USER_API_URL = 'http://localhost:8080/items';

class UserService {
    postLogin(user) {
        return axios.post(USER_LOGIN_URL, user);
    }

    postUser(user) {
        return axios.post(USER_SIGNUP_URL, user)
    }

    getUserByEmail(email) {
        return axios.get(USER_API_URL + "/" + email);
    }
}

export default new UserService();