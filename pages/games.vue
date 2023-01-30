<template>
    <div class="container">
      <a-row class="mt-5" :gutter="[10,10]">
          <a-col :span="19">
          <gamesData/>
          </a-col>
          <a-col :span="5">
          <sideBar/>
          </a-col>
       </a-row>
    </div>
  </template>
  
  <script>
  import sideBar from "../components/sidebar.vue"
  import gamesData from "../components/gamesData.vue"
  export default {
      components:{
          sideBar,
          gamesData
      }
  
  }
  </script>
  
  <style>
  
  </style>