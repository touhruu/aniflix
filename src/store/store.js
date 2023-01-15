import { createStore } from 'vuex'
import { films, fullFilms } from '@/mockdate/mockfilms';

export const store = createStore({
    state () {
      return {
        films: null,
        fullFilmInfo: null,
      }
    },
    mutations: {
      setFilms (state, films) {
        state.films = films;
      },
      setFullFilmInfo (state, fullFilmInfo) {
        state.fullFilmInfo = fullFilmInfo;
      }
    },
    actions: {
        onGetFilmsRequest({commit}) {
            const filmsFromBackend = films;
            commit('setFilms', filmsFromBackend);
        },

        onGetFullFilmInfo({commit}, filmId) {
            const oneFilmFromBackend = fullFilms[filmId - 1];
            commit('setFullFilmInfo', oneFilmFromBackend);
        }
    }
  })
