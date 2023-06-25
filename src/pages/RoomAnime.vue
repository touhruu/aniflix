<template>

  <div class="room-wrapper" v-if="room">
    <div class="video">
      <h1 class="title">{{ room.Anime.name }}</h1>
      <div class="video-pleer" v-if="room.Anime.seria && room.Anime.seria[numberSeria]">
        <video controls="controls" :key="numberSeria" ref="player">
          <source
            :src="'http://localhost:3000/' + room.Anime.seria[numberSeria].Video.videoFile"
          />
        </video>
        <v-pagination
          :length="room.Anime.seria.length"
          @update:modelValue="changeVideo"
        ></v-pagination>
      </div>
    </div>
    <div class="chat">

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUpdated } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useWebSocket } from "../hooks/useWebSocket.js";

const router = useRoute();
const store = useStore();

const numberSeria = ref(0);
const player = ref();

function changeVideo(number) {
  numberSeria.value = number - 1;
  console.log(numberSeria.value);
}

store.dispatch("onGetOneRoom", router.params.url);
const room = computed(() => store.state.room);
const socket = useWebSocket("http://localhost:3000");
socket.emit("addRoom", router.params.url);

socket.emit("newMessage");

socket.on("message", () => {
  alert("новый пользователь вошел в комнату");
});

socket.on("play", () => {
  player.value.play();
});

socket.on("pause", () => {
  player.value.pause();
});

function playAnime(){
  socket.emit("setPlay");
}

function pauseAnime(){
  socket.emit("setPause");
}

onUpdated(() => {
  if(player.value){
    player.value.removeEventListener("play", playAnime);
    player.value.addEventListener("play", playAnime);
  }

  if(player.value){
    player.value.addEventListener("pause", pauseAnime);
  }
});
</script>

<style scoped lang="scss">
p {
  color: #bbbbbb;
}

.room-wrapper {
  display: flex;
  padding: 2% 5% 2% 5%;
}

.video {
  display: flex;
  flex-direction: column;
  width: 70%;

  .title {
    color: #bbbbbb;
    margin-bottom: 5px;
  }
}

.video-pleer{
  width: 100%;
  color: #bbbbbb;
  video{
    width: 100%;
  }
}
</style>
