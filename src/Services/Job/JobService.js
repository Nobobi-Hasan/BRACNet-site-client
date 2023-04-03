import JobApi from "../../API/Job/JobApi"

export default {

    deActivateJob: jobId => JobApi.deactivateJob(jobId),
    getAllJobs: () => JobApi.getAllJobs(),
    storeNewJob: (formData) => JobApi.storeNewJob(formData),
    getJob: jobId => JobApi.getJob(jobId),
    updateJob: (formData, jobId) => JobApi.updateJob(formData, jobId),

}