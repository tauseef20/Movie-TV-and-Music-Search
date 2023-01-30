export default {
  MOVIES_DATA(state, payload){
    state.moviesData = payload
  },
  MUSIC_DATA(state, payload){
    debugger
    state.musicsData = payload.result
  },
  TV_DATA(state, payload){
    debugger
    state.showsData = payload.result
  },
  GAME_DATA(state, payload){
    debugger
    state.GAMEData = payload.result
  }

};
