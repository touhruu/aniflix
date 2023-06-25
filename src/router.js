import { createRouter, createWebHistory } from 'vue-router'
import AniflixIndex from './pages/AniflixIndex.vue'
import AniflixAnime from './pages/AniflixAnime.vue'
import OneAnimePage from './pages/OneAnimePage.vue'
import AniflixAuth from './pages/AniflixAuth.vue'
import RandomAnime from './pages/RandomAnime.vue'
import AddVideo from './pages/AddVideo.vue'
import UserLk from './pages/UserLk.vue'
import JointViewingAnime from './pages/JointViewingAnime.vue'
import RoomAnime from './pages/RoomAnime.vue'

const routes = [
    { path: '/', component: AniflixIndex },
    { path: '/anime', component: AniflixAnime },
    { path: '/anime/:id', component: OneAnimePage },
    { path: '/anime/auth', component: AniflixAuth },
    { path: '/anime-rand', component: RandomAnime },
    { path: '/video/add', component: AddVideo },
    { path: '/user', component: UserLk },
    { path: '/joint-viewing', component: JointViewingAnime },
    { path: '/room/:url', component: RoomAnime }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})