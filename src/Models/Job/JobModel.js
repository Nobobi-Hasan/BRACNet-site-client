export default class JobModel{
    constructor(title, age_from, age_to, vacancy, job_context, job_responsibilities, employment_status, workplace, educational_requirements, experience_requirements, additional_requirements, job_location, salary, compensation_and_other_benefits, gender, bdjobs_url, application_deadline ){
        this.title = title;
        this.age_from = age_from;
        this.age_to = age_to;
        this.vacancy = vacancy;
        this.job_context = job_context;
        this.job_responsibilities = job_responsibilities;
        this.employment_status = employment_status;
        this.workplace = workplace;
        this.educational_requirements = educational_requirements;
        this.experience_requirements = experience_requirements;
        this.additional_requirements = additional_requirements;
        this.job_location = job_location;
        this.salary = salary;
        this.compensation_and_other_benefits = compensation_and_other_benefits;
        this.gender = gender;
        this.bdjobs_url = bdjobs_url;
        this.application_deadline = application_deadline;
    }
}