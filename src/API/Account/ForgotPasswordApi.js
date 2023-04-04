import axios from "axios";
import Data from "../../Data/Data"
var ForgotPasswordApi = {
    async sendEmailToUser(forgotPasswordModel) {
        let response = await axios.post(`${Data.url}/password-reset`, forgotPasswordModel)
        return response.data
    }
}

export default ForgotPasswordApi;