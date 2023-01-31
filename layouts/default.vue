<template>
  <div id="components-layout-demo-basic">
    <a-row>
      <a-col>
        <Header />
      </a-col>
    </a-row>
    <div class="bodyData">
      <a-row class="BodyData mx-10">
        <a-col>
          <nuxt />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.BodyData {
  background-image: url(./../static/main-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: auto;
  /* margin-top: 30px !important; */
}
.bodyData{
  background: #000;
  position: absolute;
  width: 100%;
  height: auto;
}
</style>
