<template>
  <div>
    <a-row type="flex" justify="center"  class="my-10 pt-5">
        <a-col>
            Logo
        </a-col>
    </a-row>
    <a-row class="pt-5"  type="flex" justify="center">
      <a-col :span=10>
        <div class="inputField">
        <a-input-search
          placeholder="Search for torrents..."
          enter-button="Search"
          size="large"
          @search="onSearch"
        />
    </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.inputField .ant-btn-primary{
    background-color: #ee490e;
    border:1px solid #ff6735;
    font-size: 20px;
    font-weight: bold;
}

</style>
