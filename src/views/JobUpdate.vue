<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="Update job" />
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row mx-4">
                    <div class="card card-default col-8 offset-2">
                        <form @submit.prevent="handleForm()">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 d-flex flex-column" style="gap: 18px">

                                        <div class="form-group">
                                            <label for="title">Title</label>
                                            <input type="text" class="form-control" id="title"
                                                v-model="jobModel.title" required />
                                        </div>

                                        <div class="form-group">
                                            <label for="vacancy">Vacancy</label>
                                            <input type="number" class="form-control" id="vacancy"
                                                v-model="jobModel.vacancy" required />
                                        </div>

                                        <div class="form-group">
                                            <label for="job_context">Job Context</label>
                                            <ckeditor :editor="editor" v-model="jobModel.job_context"
                                                :config="editorConfig" required>
                                            </ckeditor>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="job_responsibilities">Job Responsibilities</label>
                                            <ckeditor :editor="editor" v-model="jobModel.job_responsibilities"
                                                :config="editorConfig" required>
                                            </ckeditor>
                                        </div>

                                        <!-- <div class="form-group">
                                            <label for="employment_status">Employment Status</label>
                                            <input type="text" class="form-control" id="employment_status"
                                                v-model="jobModel.employment_status" required />
                                        </div> -->

                                        <div class="form-group">
                                            <label for="employment_status">Employment Status</label>
                                            <select class="form-control" id="employment_status"
                                                v-model="jobModel.employment_status" required>
                                                <option selected="jobModel.workplace=='Full-tim'?'true':'false'">Full-time</option>
                                                <option selected="jobModel.workplace=='Part-time'?'true':'false'">Part-time</option>
                                            </select>
                                        </div>

                                        <!-- <div class="form-group">
                                            <label for="workplace">Workplace</label>
                                            <input type="text" class="form-control" id="workplace"
                                                v-model="jobModel.workplace" required />
                                        </div> -->

                                        <div class="form-group">
                                            <label for="workplace">Workplace</label>
                                            <select class="form-control" id="workplace"
                                                v-model="jobModel.workplace" required>
                                                <option selected="jobModel.workplace=='Work at Office'?'true':'false'">Work at Office</option>
                                                <option selected="jobModel.workplace=='Work from Home'?'true':'false'">Work from Home</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label for="educational_requirements">Educational Requirements</label>
                                            <ckeditor :editor="editor" v-model="jobModel.educational_requirements"
                                                :config="editorConfig" required>
                                            </ckeditor>
                                        </div>

                                        <div class="form-group">
                                            <label for="experience_requirements">Experience Requirements</label>
                                            <ckeditor :editor="editor" v-model="jobModel.experience_requirements"
                                                :config="editorConfig" required>
                                            </ckeditor>
                                        </div>

                                        <div class="form-group">
                                            <label for="additional_requirements">Additional Requirements</label>
                                            <ckeditor :editor="editor" v-model="jobModel.additional_requirements"
                                                :config="editorConfig" required>
                                            </ckeditor>
                                        </div> 

                                        <!-- <div class="form-group">
                                            <label for="job_location">Job Location</label>
                                            <input type="text" class="form-control" id="job_location"
                                                v-model="jobModel.job_location" required />
                                        </div>  -->

                                        <div class="form-group">
                                            <label for="job_location">Job Location</label>
                                            <select class="form-control" id="job_location"
                                                v-model="jobModel.job_location" required>
                                                <option selected="jobModel.workplace=='Dhaka (Corporate Office)'?'true':'false'">Dhaka (Corporate Office)</option>
                                                <option selected="jobModel.workplace=='Chattagram Office'?'true':'false'">Chattagram Office</option>
                                                <option selected="jobModel.workplace=='Sylhet Office'?'true':'false'">Sylhet Office</option>
                                                <option selected="jobModel.workplace=='Khulna Office'?'true':'false'">Khulna Office</option>
                                                <option selected="jobModel.workplace=='Rajshahi Office'?'true':'false'">Rajshahi Office</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label for="salary">Salary</label>
                                            <input type="text" class="form-control" id="salary"
                                                v-model="jobModel.salary" required />
                                        </div>

                                        <div class="form-group">
                                            <label for="compensation_and_other_benefits">Compensation And Other Benefits</label>
                                            <ckeditor :editor="editor" v-model="jobModel.compensation_and_other_benefits"
                                                :config="editorConfig" required>
                                            </ckeditor>
                                        </div>

                                        <!-- <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <input type="text" class="form-control" id="gender"
                                                v-model="jobModel.gender" required />
                                        </div>  -->

                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <select class="form-control" id="gender"
                                                v-model="jobModel.gender" required>
                                                <option selected="jobModel.workplace=='Only males are allowed'?'true':'false'">Only males are allowed</option>
                                                <option selected="jobModel.workplace=='Only females are allowed'?'true':'false'">Only females are allowed</option>
                                                <option selected="jobModel.workplace=='Both males and females are allowed'?'true':'false'">Both males and females are allowed</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label for="application_deadline">Application Deadline</label>
                                            <input type="date" class="form-control" id="application_deadline"
                                                v-model="jobModel.application_deadline" required />
                                        </div>

                                        
                                        <div class="d-flex justify-content-end">
                                            <button class="btn btn-primary" type="submit">Submit</button>
                                        </div>

                                    </div>
                                </div>
                                <!-- /.row -->
                            </div>
                        </form>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import JobModel from "../Models/Job/JobModel"
import JobService from "../Services/Job/JobService"
export default {
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            
            jobModel: new JobModel(),
        }
    },
    async mounted() {
        this.jobModel = await JobService.getJob(this.$route.params.id)
    },
    methods: {
        async handleForm() {
            let response = await JobService.updateJob(this.jobModel, this.$route.params.id)
            if (response.success) {
                toastr.success(response.message)

            } else {
                toastr.error(response.message)
            }

        }
    },

}
</script>

<style>

</style>