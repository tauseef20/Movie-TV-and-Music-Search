import axios from "axios";
export default {
  movieData({ commit }, payload) {
    const options = {
      method: "GET",
      url: "https://most-popular-movies-right-now-daily-update.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "03fe0bf88dmsh92fe39773b74496p1ff443jsnaad711a67843",
        "X-RapidAPI-Host":
          "most-popular-movies-right-now-daily-update.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        debugger;
        commit("MOVIES_DATA", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  musicData({ commit }, payload) {
    const options = {
      method: "GET",
      url: "https://movie-tv-music-search-and-download.p.rapidapi.com/monthly_top100_music",
      headers: {
        "X-RapidAPI-Key": "03fe0bf88dmsh92fe39773b74496p1ff443jsnaad711a67843",
        "X-RapidAPI-Host": "movie-tv-music-search-and-download.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        debugger;
        commit("MUSIC_DATA", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  tvData({ commit }, payload) {
    const options = {
      method: "GET",
      url: "https://movie-tv-music-search-and-download.p.rapidapi.com/monthly_top100_tv_shows",
      headers: {
        "X-RapidAPI-Key": "03fe0bf88dmsh92fe39773b74496p1ff443jsnaad711a67843",
        "X-RapidAPI-Host": "movie-tv-music-search-and-download.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        debugger;
        commit("TV_DATA", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  gameData({ commit }, payload) {
    const options = {
      method: "GET",
      url: "https://movie-tv-music-search-and-download.p.rapidapi.com/monthly_top100_games",
      headers: {
        "X-RapidAPI-Key": "03fe0bf88dmsh92fe39773b74496p1ff443jsnaad711a67843",
        "X-RapidAPI-Host": "movie-tv-music-search-and-download.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("GAME_DATA", response);
        debugger;
        commit("GAME_DATA", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
