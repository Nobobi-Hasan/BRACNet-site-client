import JobApi from "../../API/Job/JobApi"

export default {

    deActivateJob: jobId => JobApi.deactivateJob(jobId),
    getAllJobs: () => JobApi.getAllJobs(),

}