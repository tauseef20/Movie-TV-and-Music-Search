<template>
  <div>
    <a-card class="sideBar" title="BROWSE TORRENTS">
      <a-row>
        <a-col :span="24" v-for="data in getsideData" :key="data">
          <a-row>
            <a-col :span="6">
              <img :src="data.image" width="30px" height="30px" alt="" />
            </a-col>
            <NuxtLink :to="data.link">
            <a-col :span="18">{{ data.title }}</a-col>
            </NuxtLink>
          </a-row>
          <a-divider />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("modules/data", ["getsideData"]),
  },
};
</script>

<style>
.ant-card-head {
  background-color: #d63600;
}
.ant-card-head-title {
  /* border: 1px solid #f85c27; */
  border-radius: 3px 3px 0 0;
  font-size: 24px;
  color: #fff;
  line-height: 35px;
  text-align: center;
  text-shadow: 0 0 2px #000;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
.ant-card {
  padding: 0;
}
.ant-divider-horizontal {
  margin: 12px 0;
}
</style>
