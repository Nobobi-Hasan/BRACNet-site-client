import axios from "axios";
import Data from "../../Data/Data"
var MetaDataApi = {

    async adminCardMetadata() {
        var response = await axios.get(`${Data.url}/admin/metadata`);

        return response;
    },
}
export default MetaDataApi;