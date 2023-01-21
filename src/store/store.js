import { createStore } from 'vuex'
import {category, films, fullFilms, genres, status} from '@/mockdate/mockfilms';

export const store = createStore({
  state() {
    return {
      films: null,
      fullFilmInfo: null,
      genres: null,
      status: null,
      category: null
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
    },
    setStatus(state, status) {
      state.status = status;
    },
    setCategory(state, category) {
      state.category = category;
    },
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
    },

    onGetStatus({ commit }) {
      const statusFromBackend = status;
      commit('setStatus', statusFromBackend);
    },

    onGetCategory({ commit }) {
      const categoryFromBackend = category;
      commit('setCategory', categoryFromBackend);
    }
  }
})
