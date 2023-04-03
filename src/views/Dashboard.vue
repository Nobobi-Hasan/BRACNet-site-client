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
                  <div :class='"small-box bg-red"'>
                      <div class="inner">
                          <h3>{{ adminCardMetadata['data'] }}</h3>

                          <p>Total Jobs</p>
                      </div>
                      <div class="icon">
                          <i class="fas fa-list"></i>
                      </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <!-- small box -->
                  <div :class='"small-box bg-blue"'>
                      <div class="inner">
                          <h3>{{ adminCardMetadata['data'] }}</h3>

                          <p>Active Jobs</p>
                      </div>
                      <div class="icon">
                        <i class="fas fa-play-circle"></i>
                      </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <!-- small box -->
                  <div :class='"small-box bg-green"'>
                      <div class="inner">
                          <h3>103</h3>

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
                  <table id="example1" class="table table-bordered table-striped table-head-fixed">
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
                          <div class="btn-group btn-group-sm">
                            <router-link :to="{
                                name: 'JobUpdate',
                                params: { id: item.id },
                              }" class="btn btn-info">
                              <i class="fas fa-edit"></i>
                            </router-link>

                            <button class="btn btn-danger" @click="deactivateJob(item.id)">
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
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
        adminCardMetadata: {},
        jobList: []
      }
    },
    async mounted() {
      this.adminCardMetadata = await adminCardMetadata.adminCardMetadata()
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