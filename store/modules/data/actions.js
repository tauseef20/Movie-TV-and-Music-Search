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
    axios.request(options).then(function (response) {
      console.log(response);
      debugger
      commit('MOVIES_DATA', response.data)
  }).catch(function (error) {
      console.error(error);
  });
  },
};
