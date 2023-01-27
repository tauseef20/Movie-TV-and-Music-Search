<template>
  <div id="components-layout-demo-basic" >
    <a-row>
        <a-col>
            <Header/>
        </a-col>
    </a-row>
    <a-row class="Body mx-10">
      <a-col>
        <nuxt/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>
