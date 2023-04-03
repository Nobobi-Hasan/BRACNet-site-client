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

    async storeNewJob(formData) {
        var response = await axios.post(`${Data.url}/admin/job/store`, formData)
        return response.data
    },

    async getJob(jobId) {
        var response = await axios.get(`${Data.url}/admin/job/${jobId}`)
        return response.data
    },
    
    async updateJob(formData, jobId) {
        var response = await axios.put(`${Data.url}/admin/job/update/${jobId}`, formData)
        return response.data
    },
}

export default JobApi;