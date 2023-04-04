export default class ResetPasswordModel {
    constructor(otp, password,password_confirmation, email, token) {
        this.otp = otp
        this.password = password
        this.password_confirmation = password_confirmation
        // this.userID = userID
        this.token = token
    }
}

