export default class JobModel{
    constructor(title, vacancy, job_responsibilities, employment_status, workplace, educational_requirements, experience_requirements, additional_requirements, job_location, salary, compensation_and_other_benefits, gender, application_deadline,  created_by, last_updated_by){
        this.title = title;
        this.vacancy = vacancy;
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
        this.application_deadline = application_deadline;
        this.created_by = created_by;
        this.last_updated_by = last_updated_by
    }
}