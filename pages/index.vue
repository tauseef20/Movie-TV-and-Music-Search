<template>
  <div class="container">
    <a-row type="flex" justify="center" class="my-10 pt-5">
      <a-col> Logo </a-col>
    </a-row>
    <a-row class="pt-5" type="flex" justify="center">
      <a-col :span="10">
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
    <a-row class="pt-10 pl-10" type="flex" justify="center">
      <a-col :span="3" @click="movies">
        <div class="colorBg">
          <img class="pl-3 pt-2" src="../static/home/video.png" alt="" />
        </div>
        <p class="pt-2 pl-2">Movies</p>
      </a-col>
      <a-col :span="3"  @click="tvshows">
        <div class="colorBg">
          <img class="pl-3 pt-2" src="../static/home/television.png" alt="" />
        </div>
        <p class="pl-2 pt-2">TV Shows</p>
      </a-col>
      <a-col :span="3" @click="music">
        <div class="colorBg">
          <img class="pl-3 pt-2" src="../static/home/musical-note.png" alt="" />
        </div>
        <p class="pt-2">Trending Music</p>
      </a-col>
      <a-col :span="3">
        <div class="colorBg" @click="game">
          <img class="pl-3 pt-2" src="../static/home/console.png" alt="" />
        </div>
        <p class="pl-3 pt-2">Games</p>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  methods: {
    movies() {
      this.$router.push("/movies");
    },
    music() {
      this.$router.push("/music");
    },
    tvshows() {
      this.$router.push("/tvShows");
    },
    game(){
        this.$router.push("/games");
    }
  },
};
</script>

<style>
.inputField .ant-btn-primary {
  background-color: #ee490e;
  border: 1px solid #ff6735;
  font-size: 20px;
  font-weight: bold;
}
.colorBg {
  background-color: #ee490e;
  height: 72px;
  width: 72px;
  border-radius: 100%;
}
.colorBg img {
  width: 60px;
  height: 50px;
  /* border-radius: 100%; */
  /* border: 2px yellow solid; */
}
</style>
