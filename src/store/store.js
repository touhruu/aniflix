import { createStore } from 'vuex'
// import { category } from '@/mockdate/mockfilms';
// import axios from "axios";
import api from '@/api'

export const store = createStore({
  state() {
    return {
      films: [],
      fullFilmInfo: {},
      genres: null,
      status: null,
      category: null,
      searchInput: '',
      error: null,
      user: null,
      randFilm: null,
      bookmark: null,
      rooms: [],
      room: null,
      lastVideoId: null,
      messages: null
    }
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },
    addOneFilm(state, film){
      state.films.push(film)
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
    setSearch(state, searchInput) {
      state.searchInput = searchInput;
    },
    setError(state, error){
      state.error = error;
    },
    setUser(state, user){
      state.user ? state.user = null : state.user = user.user
    },
    setRandFilm(state, randFilm){
      state.randFilm = randFilm;
    },
    setBookmark(state, bookmark){
      state.bookmark = bookmark
    },
    addOneBookmark(state, bookmark){
      state.bookmark.push(bookmark)
    },
    deleteOneBookmark(state, bookmark){
      state.bookmark = state.bookmark.filter(mark => mark.id !== bookmark.id)
    },
    setRoom(state, room){
      state.rooms = room
    },
    addRoom(state, room){
      state.rooms.push(room)
    },
    setOneRoom(state, room){
      state.room = room
    },
    updateAvatar(state, file){
      state.user.avatar = file
    },
    updateFon(state, file){
      state.user.backgraund = file
    },
    updateName(state, userInfo){
      state.user.name = userInfo.name
    },
    updateStatus(state, userInfo){
      state.user.status = userInfo.status
    },
    updateMail(state, userInfo){
      state.user.email = userInfo
    },
    updatePass(state, userInfo){
      state.user.password = userInfo
    },
    getLastVideoId(state, videoId){
      state.lastVideoId = videoId
    },
    getMessagesForRoom(state, messages){
      state.messages = messages
    },
    addMessageForChat(state, message){
      state.messages.push(message)
    }
  },
  actions: {
    async onGetFilmsRequest({ commit }) {
      const filmsFromBackend = await api.get('/anime');
      commit('setFilms', filmsFromBackend.data);
    },

    async onGetFullFilmInfo({ commit }, filmId) {
      const oneFilmFromBackend = await api.get(`/anime/${filmId}`);
      commit('setFullFilmInfo', oneFilmFromBackend.data);
    },

    async onGetGenres({ commit }) {
      const genresFromBackend = await api.get('/genres');
      commit('setGenres', genresFromBackend.data);
    },

    async onGetStatus({ commit }) {
      const statusFromBackend = await api.get('/status');
      commit('setStatus', statusFromBackend.data);
    },

    async onGetCategory({ commit }) {
      const categoryFromBackend = await api.get('/category');
      commit('setCategory', categoryFromBackend.data);
    },

    async onAnimeUploading(_, animeForm) {
      await api.post('/anime/add', animeForm);
    },

    async logIn({ commit }, loginForm){
      try{
        const userFromBackend = await api.post('/auth/log', loginForm);
        localStorage.setItem('token', userFromBackend.data.token)
        commit('setUser', userFromBackend.data)
        commit('setError', false)
      }
      catch(e){
        console.log(e)
        commit('setError', true)
      }
    },

    async logout({ commit }){
      localStorage.removeItem('token')
      commit('setUser')
    },

    async registration({ commit }, regForm){
      try{
        await api.post('/auth/reg', regForm)
        commit('setError', false)
      }
      catch(e){
        console.log(e)
        commit('setError', true)
      }
    },

    async onGetRandomFilm({ commit }){
      const randomFilmFromBackend = await api.get('/rand-anime')
      commit('setRandFilm', randomFilmFromBackend.data)
    },

    async getLastVideoId({ commit }){
      const videoId = await api.get('/video-last')
      commit('getLastVideoId', videoId.data)
    },

    async sendVideo(state, videoFile){
      await api.post('/video', videoFile)
    },

    async whoAmI({ commit }){
      const user = await api.get('/whoAmI')
      commit('setUser', {user: user.data})
    },

    async onGetBookmark({ commit }){
      const bookmarkFromBackend = await api.get('/bookmark')
      commit('setBookmark', bookmarkFromBackend.data)
    },

    async addBookmark({ commit }, bookmark){
      const newBookmark = await api.post('/bookmark', bookmark)
      commit('addOneBookmark', newBookmark.data)
    },

    async deleteBookmark({ commit }, bookmarkId){
      const delBookmark = await api.delete(`/bookmark/${bookmarkId}`)
      commit('deleteOneBookmark', delBookmark.data)
    },

    async onGetRooms({ commit }){
      const room = await api.get('/room')
      commit('setRoom', room.data)
    },

    async addRoom({ commit }, room){
      const roomFromBackend = await api.post('/room', room)
      commit('addRoom', roomFromBackend.data)
      commit('setOneRoom', roomFromBackend.data)
    },

    async onGetOneRoom({ commit }, url){
      const room = await api.get(`/room/${url}`)
      commit('setOneRoom', room.data)
    },

    async addAvatar({ commit }, file){
      const avatar = await api.put('/addAvatar', file)
      commit('updateAvatar', avatar.data)
    },
    
    async addUserFon({ commit }, file){
      const backgraund = await api.put('/addBackgraund', file)
      commit('updateFon', backgraund.data)
    },

    async updateUserName({ commit }, user){
      const userInfo = await api.put('/user', user)
      commit('updateName', userInfo.data)
    },
    
    async updateUserStatus({ commit }, user){
      const userInfo = await api.put('/user', user)
      commit('updateStatus', userInfo.data)
    },
    
    async updateUserMail({ commit }, user){
      const userInfo = await api.put('/updateUserMail', user)
      commit('updateMail', userInfo.data)
    },

    async updateUserPass({ commit }, user){
      const userInfo = await api.put('/updateUserPass', user)
      commit('updatePass', userInfo.data)
    },

    async addSeria(_, seria){
      await api.post('/seria', seria)
    },

    async getMessagesForRoom({ commit }, roomId){
      const messages = await api.get(`/getMessage/${roomId}`)
      commit('getMessagesForRoom', messages.data)
    }
  },
  getters: {
    genryFiltrFilms: (state, getters) => (filter) => {
      return getters.bookmarkAnime.filter((filmElement) => {
        const outputSearch = (filmElement.name.toLowerCase().indexOf(state.searchInput.toLowerCase()) >= 0)
        const outputStatus = filter.statusFilter.length === 0 || filter.statusFilter.includes(filmElement.Status.name)
        const outputCategory = filter.categoryFilter.length === 0 || filter.categoryFilter.includes(filmElement.Category.name)
        const outputGenre = filmElement.Genres.filter(elem => filter.genreFilter.includes(elem.name))
        return outputStatus && outputSearch && outputCategory && (outputGenre.length > 0 || filter.genreFilter.length === 0)
      })
    },
    bookmarkAnime: (state) => {
      return state.films.map((film) => {
        const bookmark = state.bookmark ? state.bookmark.reduce((acc, bookmark) => {
          return film.id === bookmark.AnimeId ? true : acc
        }, false) : false
        return { ...film, bookmark }
      })
    },
    searchFilms: (state, getters) => {
      return getters.bookmarkAnime.filter((filmElement) => {
        const outputSearch = (filmElement.name.toLowerCase().indexOf(state.searchInput.toLowerCase()) >= 0)
        return outputSearch
      })
    },

  }
})
