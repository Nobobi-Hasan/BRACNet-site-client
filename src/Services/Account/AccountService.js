import LoginApi from "../../API/Account/LoginApi"
import LogoutApi from "../../API/Account/LogoutApi"
import ForgotPasswordApi from "../../API/Account/ForgotPasswordApi"
import ResetPasswordApi from "../../API/Account/ResetPasswordApi"

export default {

    validateUserLogin: formData => LoginApi.validateUserLogin(formData),

    saveUserDetailsToLocalStorage: (data) => localStorage.setItem("user", JSON.stringify(data)),

    sendEmailToUser: formData => ForgotPasswordApi.sendEmailToUser(formData),

    resetPasswordOnNewAccount: formData => ResetPasswordApi.resetPasswordOnNewAccount(formData),

    logout: () => LogoutApi.logout(),

    loggedInUserId: () => {
        let user = JSON.parse(localStorage.getItem("user"));
        return user.id
    },

    loggedUserName: () => {
        let user = JSON.parse(localStorage.getItem("user"));
        return user.name
    },

    isAuthenticated: () => {
        let user = JSON.parse(localStorage.getItem("user"));
        return user ? true : false;
    },

}