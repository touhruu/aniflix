import { createRouter, createWebHistory } from 'vue-router'
import AniflixIndex from './pages/AniflixIndex.vue'
import AniflixAnime from './pages/AniflixAnime.vue'
import OneAnimePage from './pages/OneAnimePage.vue'

const routes = [
    { path: '/', component: AniflixIndex },
    { path: '/anime', component: AniflixAnime },
    { path: '/anime/:id', component: OneAnimePage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})