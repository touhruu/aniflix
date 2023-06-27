<template>
  <div class="room-wrapper" v-if="room">
    <div class="video">
      <h1 class="title">{{ room.Anime.name }}</h1>
      <div class="video-pleer" v-if="room.Anime.seria && room.Anime.seria[numberSeria]">
        <video controls="controls" :key="numberSeria" ref="player">
          <source
            :src="'http://141.8.194.146:3000/' + room.Anime.seria[numberSeria].Video.videoFile"
          />
        </video>
        <v-pagination
          :length="room.Anime.seria.length"
          @update:modelValue="changeVideo"
        ></v-pagination>
      </div>
    </div>
    <div class="chat">
      <div class="chat__userInRoom">
        <p>В комнате: 2</p>
      </div>
      <div class="chat__messages">
        <div class="chat__messages__message__wrapper">
          <div class="chat__messages__message__foto">

          </div>
          <div class="chat__messages__message__text__wrapper">
          <div class="chat__messages__message__name">
            <p>Админ</p>
          </div>
          <div class="chat__messages__message__text">
            <p>Привет :)</p>
          </div>
          </div>
        </div>

      </div>
      <div class="chat__form">
        <input class="chat__input" type="text" placeholder="Напишите сообщение" />
        <button class="chat__button">
          <img class="chat__button__img" src="/assets/icon/send.png">
        </button>
      </div>
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
const socket = useWebSocket("http://141.8.194.146:3000");
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

function playAnime() {
  socket.emit("setPlay");
}

function pauseAnime() {
  socket.emit("setPause");
}

onUpdated(() => {
  if (player.value) {
    player.value.removeEventListener("play", playAnime);
    player.value.addEventListener("play", playAnime);
  }

  if (player.value) {
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
  height: 450px;
}

.video {
  display: flex;
  flex-direction: column;
  width: 960px;

  .title {
    color: #bbbbbb;
    margin-bottom: 5px;
  }
}

.video-pleer {
  width: 100%;
  color: #bbbbbb;
  video {
    width: 100%;
  }
}

.chat {
  width: 415px;
  height: 540px;
  background-color: #373737;
  margin-top: 53px;
  margin-bottom: 57px;

  &__userInRoom {
    background-color: #2b2b2b;
    padding: 5px;
    font-weight: bold;
  }

  &__messages {
    height: 455px;
    max-height: 455px;
  }

  &__form {
    display: flex;
    height: 40px;
    padding-bottom: 10px;
  }

  &__input {
    background-color: #2b2b2b;
    border-radius: 5px;
    padding: 5px;
    color: #b2b2b2;
    width: 320px;
    height: 40px;
    margin-right: 10px;
    margin-left: 10px;
  }

  &__button {
    background-color: #2b2b2b;
    color: #b2b2b2;
    height: 40px;
    width: 50px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 2px 0px 5px;
  }

  &__button__img{
    width: 35px;
  }

  &__messages__message__wrapper{
    display: flex;
    padding: 10px;
  }

  &__messages__message__foto{
    background-color: #555555;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  &__messages__message__text__wrapper{
    display: flex;
    flex-direction: column;
    background-color: #555555;
    border-radius: 5px;
    margin-left: 5px;
    padding: 5px;
    max-width: 326px;
  }

  &__messages__message__name p{
    color: #ff9f00;
    font-weight: bold;
  }

  &__messages__message__text p{
    color: white;
  }
}
</style>
