import axios from "axios";
import Data from "../../Data/Data";

var ChangePasswordApi = {
    async changePassword(changePasswordModel) {
        let response = await axios.post(`${Data.url}/admin/change-password`, changePasswordModel)
        return response.data;
    }
}

export default ChangePasswordApi;