import axios from "axios";
import Data from "../../Data/Data"
var LoginApi = {
    async validateUserLogin(LoginDetails) {
        try {
            let response = await axios.post(Data.url + "/login", LoginDetails)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default LoginApi;