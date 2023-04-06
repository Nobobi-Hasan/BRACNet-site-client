<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <ContentHeader title="Dashboard" />
      <!-- /.content-header -->
  
      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Main content -->
          <!-- <component v-if="dynamicDashboard" :is='dynamicDashboard' :metaData="metaData"></component> -->
          <!-- main content end -->

          <!-- Card Section Start -->
          <div class="row pt-4">
              <!-- Info card Start -->
                <div class="col-md-4">
                  <!-- small box -->
                  <div :class='"small-box bg-red overflow-hidden"'>
                      <div class="inner">
                          <h3 :class= hasValue >{{ adminCardMetadata['jobs'] }}</h3>

                          <p>Total Jobs</p>
                      </div>
                      <div class="icon">
                          <i class="fas fa-list"></i>
                      </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <!-- small box -->
                  <div :class='"small-box bg-blue overflow-hidden"'>
                      <div class="inner">
                          <h3 :class= hasValue >{{ adminCardMetadata['activeJobs'] }}</h3>

                          <p>Active Jobs</p>
                      </div>
                      <div class="icon">
                        <i class="fas fa-play-circle"></i>
                      </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <!-- small box -->
                  <div :class='"small-box bg-green overflow-hidden"'>
                      <div class="inner">
                          <h3 :class= hasValue >{{ adminCardMetadata['views'] }}</h3>

                          <p>Jobs Views</p>
                      </div>
                      <div class="icon">
                        <i class="fas fa-eye"></i>
                      </div>
                  </div>
                </div>
              <!-- Info card End -->
          </div>
          <!-- Card Section End -->

          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <div class="d-flex justify-content-between">
                    <h3 class="card-title">Job List</h3>
                  </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table id="example1" class="table table-sm table-striped table-head-fixed table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Deadline</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in jobList" :key="item.id">
                      <!-- <tr> -->
                        <td>{{ item.id }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.application_deadline }}</td>
                        <td>

                          <!-- Example single danger button -->
                          <div class="btn-group dropright">
                            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Action
                            </button>
                            <div class="dropdown-menu">
                              <router-link :to="{
                                  name: 'JobUpdate',
                                  params: { id: item.id },
                                }">
                                <a class="dropdown-item" href="#"><i class="fas fa-edit"></i> Edit</a>
                              </router-link>

                              <a @click="deactivateJob(item.id)" class="dropdown-item" href="#"><i class="fas fa-trash"></i>Delete</a>

                              <!-- <a class="dropdown-item" href="#">Separated link</a> -->
                            </div>
                          </div>

                          <!-- <div class="btn-group btn-group-sm">
                            <router-link :to="{
                                name: 'JobUpdate',
                                params: { id: item.id },
                              }" class="btn btn-info">
                              <i class="fas fa-edit"></i>
                            </router-link>

                            <button class="btn btn-danger" @click="deactivateJob(item.id)">
                              <i class="fas fa-trash"></i>
                            </button>
                          </div> -->

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
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
  import JobService from '../Services/Job/JobService';
  import adminCardMetadata from '../Services/Metadata/MetadataService';

  export default {
    components: {  },
    data() {
      return {
        adminCardMetadata: {"jobs": "Loading",
                            "activeJobs": "Loading",
                            "views": "Loading"},
        jobList: [],
        // hasValue: "opacity-50"
        hasValue: "text-white-50"
      }
    },
    async mounted() {
      this.adminCardMetadata = await adminCardMetadata.adminCardMetadata()
      // this.hasValue ="opacity-100"
      this.hasValue ="text-light"
      this.jobList = await JobService.getAllJobs()

    },
    methods: {
      async deactivateJob(jobId) {
        if (confirm("Do you want to deactivate this job? ")) {
          let response = await JobService.deActivateJob(jobId)
          if (response.success) {
            this.jobList = await JobService.getAllJobs()
            toastr.info(response.message)
          }
        }
      },

    },
   
  };
  </script>
  
  <style scoped>
  .custom-card:hover {
    transition: .3s ease;
    transform: scale(1.01);
    cursor: pointer;
  }

  </style>