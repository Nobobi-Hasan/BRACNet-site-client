import axios from "axios";
import Data from "../../Data/Data"
var JobApi = {
    async deactivateJob(jobId) {
        try {
            let response = await axios.delete(`${Data.url}/admin/job/delete/${jobId}`)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    async getAllJobs() {
        var response = await axios.get(`${Data.url}/admin/job`)

        response = response.data.data;

        return response;

    },
}

export default JobApi;