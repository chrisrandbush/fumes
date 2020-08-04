import axios from "axios";

export default {
    logIn: (logInData) => {
        return axios.post("/api/login", logInData);
    },

    register: (registerData) => {
        return axios.post("/api/register", registerData);
    },

    logOut: () => {
        return axios.get("/api/logout");
    },

    checkout: (checkoutData) => {
        return axios.post("/api/checkout", checkoutData);
    },

    services: () => {
        return axios.get("/api/services");
    },
  
      feedback: (feedbackData) => {
        return axios.post("/api/feedback", feedbackData);
    },

    pushCart: (cartData) => {
        return axios.post("/api/pushCart", cartData);
    },

    pullCart: () => {
        return axios.get("/api/pullCart");
    }

}