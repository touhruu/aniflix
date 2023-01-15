import { createStore } from 'vuex'
import { films, fullFilms, genres } from '@/mockdate/mockfilms';

export const store = createStore({
  state() {
    return {
      films: null,
      fullFilmInfo: null,
      genres: null
    }
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },
    setFullFilmInfo(state, fullFilmInfo) {
      state.fullFilmInfo = fullFilmInfo;
    },
    setGenres(state, genres) {
      state.genres = genres;
    }
  },
  actions: {
    onGetFilmsRequest({ commit }) {
      const filmsFromBackend = films;
      commit('setFilms', filmsFromBackend);
    },

    onGetFullFilmInfo({ commit }, filmId) {
      const oneFilmFromBackend = fullFilms[filmId - 1];
      commit('setFullFilmInfo', oneFilmFromBackend);
    },

    onGetGenres({ commit }) {
      const genresFromBackend = genres;
      commit('setGenres', genresFromBackend);
    }
  }
})
