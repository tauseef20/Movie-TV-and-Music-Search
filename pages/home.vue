<template>
    <div class="container">
      <a-row class="mt-5" :gutter="[10,10]">
          <a-col :span="19">
          <searchData/>
          </a-col>
          <a-col :span="5">
          <sideBar/>
          </a-col>
       </a-row>
    </div>
  </template>
  
  <script>
  import sideBar from "../components/sidebar.vue"
  import searchData from "../components/searchData.vue"
  export default {
      components:{
          sideBar,
          searchData
      }
  
  }
  </script>
  
  <style>
  
  </style>