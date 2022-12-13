import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "login", {
                username,
                password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("token");
    }

    register(username, password) {
        return axios.post(API_URL + "register", {
            username,
            password
        });
    }
}

export default new AuthService()