import axios from "axios";
import Data from "../../Data/Data"
var LogoutApi = {
    async logout() {
        try {
            let response = await axios.get(`${Data.url}/logout`)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default LogoutApi;