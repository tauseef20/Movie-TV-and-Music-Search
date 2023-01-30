<template>
  <div class="container">
    <a-row class="mt-5" type="flex" justify="end">
      <a-col :span="10">
        <a-row :gutter="[10, 10]">
          <a-col :span="10">
            <div class="inputField">
              <a-form>
                <a-input v-model="form.keyword" placeholder="Search..." />
              </a-form>
            </div>
          </a-col>
          <a-col :span="10">
            <div class="inputField">
              <a-form>
                <a-input v-model="form.quantity"  placeholder="Type Quantity"/>
              </a-form>
            </div>
          </a-col>
          <a-col :span="4">
            <a-button class="searchBtn" @click="onSearch"> SEARCH </a-button>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row  :gutter="[10, 10]">
      <a-col :span="19">
        <movieData />
      </a-col>
      <a-col :span="5">
        <sideBar />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import sideBar from "../components/sidebar.vue";
import movieData from "../components/moviesData.vue";
import { mapActions } from "vuex";
export default {
  components: {
    sideBar,
    movieData,
  },
  data() {
    return {
      form: {
        keyword: "",
        quantity: "",
      },
    };
  },
  methods: {
    ...mapActions("modules/data", ["movieData" , "SearchData"]),
    onSearch(){
      this.SearchData(this.form);
      this.$router.push("/home")
    },
  },
};
</script>

<style>
.searchBtn{
/* border: 2px red solid; */
background: #ee490e;
color: #fff;
font-weight: bold;
cursor: pointer;
}
.searchBtn:hover{
border: 2px #ee490e solid;
background: #ee490e;
color: #fff;
font-weight: bold;
}
.ant-input{
  background: black;
  border: 1px solid black;
  color: #fff;
}
.ant-input:hover{
  border: 1px solid #ff6735;
}
.ant-input:focus{
  border: 1px solid #ff6735;
}
</style>
