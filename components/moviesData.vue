<template>
  <div>
    <!-- {{ getmovieData }} -->
    <a-row class="topRow">
      <a-col align="middle" class="icon" :span="2">
        <img
          src="../static/home/television.png"
          height="40px"
          width="40px"
          alt=""
        />
      </a-col>
      <a-col class="mt-2" align="middle" :span="22">
        <h3>Download Most Popular Monthly Movies Torrents</h3>
      </a-col>
    </a-row>
    <a-row>
      <a-table :columns="columns" :data-source="getmovieData" bordered>
        <a slot="image" slot-scope="obj">
          <span>
            <img :src="obj.img" height="70px" width="70px" alt="" />
          </span>
        </a>
        <!-- <a slot="title" >
          <span>{{ obj.title }}</span>
        </a> -->
        <!-- <a slot="year">
          <span>{{ obj.year }}</span>
          </a> -->
          <a slot="directed" slot-scope="obj">
          <span>{{ obj && obj.directedBy[0] }}</span>
          </a>
          
          <a slot="link" slot-scope="obj">
            <a :href="obj.url" target="blank">Watch Movie</a>
          </a>
       
      </a-table>
    </a-row>
  </div>
</template>

<script>
const columns = [
  {
    title: "Image",
    scopedSlots: { customRender: "image" },
    align:"center"
  },
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
    // scopedSlots: { customRender: "title" },
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    // scopedSlots: { customRender: "year" },
  },
  {
    title: "Directed By",
    scopedSlots: { customRender: "directed" },
  },
  {
    title: "Link",
    scopedSlots: { customRender: "link" },
  },
];
import { mapGetters, mapActions } from "vuex";
// import axios from "axios";
export default {
  created() {
    this.movieData();
  },
  computed: {
    ...mapGetters("modules/data", ["getmovieData"]),
  },
  data() {
    return {
      columns,
    };
  },
  methods: {
    ...mapActions("modules/data", ["movieData"]),
  },
};
</script>

<style>
.topRow {
  background: #d1d1d1;
  border-bottom: 4px solid #727272;
}
.icon {
  background: #d63600;
}
.ant-table-thead{
   background: #979797;
   color: #fff;
}
</style>
