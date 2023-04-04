import axios from "axios";
import Data from "../../Data/Data";
var ForgotPasswordApi = {
    async resetPasswordOnNewAccount(resetPasswordModel) {
        let response = await axios.post(`${Data.url}/reset-password`, resetPasswordModel)
        return response.data
    }
}

export default ForgotPasswordApi;