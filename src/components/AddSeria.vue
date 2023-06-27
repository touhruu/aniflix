<template>
  <div class="add-seria">
    <p class="add-seria__title">
      Выберите номер серии под которым будет располагаться это видео в плеере
    </p>
    <input
      class="add-seria__input"
      type="text"
      placeholder="Укажите позицию"
      v-model="positionData"
    />
    <p class="add-seria__title">Выберите видео</p>
    <input type="file" ref="file" @change="fileChange" />
    <p class="add-seria__title">Выберите аниме к которому хотите добавить серию</p>
    <SearchForView @filmId="getAnimeId" />
    <button class="add-seria__button" @click="addSeria()">Добавить серию</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import SearchForView from "../components/SearchForView.vue";

const store = useStore();

const file = ref(null);
const positionData = ref();
const animeIdData = ref();
const videoIdData = ref();

function getAnimeId(id) {
  animeIdData.value = id;
  console.log(animeIdData.value);
}

function addSeria() {
  let formData = new FormData();
  formData.append("file", file.value.files[0]);
  store.dispatch("sendVideo", formData);

  store.dispatch("getLastVideoId");
  const getVideo = computed(() => store.state.lastVideoId);
  watch(getVideo, () => {
    videoIdData.value = getVideo.value;
    if (getVideo.value != "") {
      const seria = ref({
        addSeria: {
          position: positionData.value,
        },
        animeId: animeIdData.value,
        videoId: videoIdData.value,
      });
      store.dispatch("addSeria", seria.value);
      console.log(seria.value)
    }
  });
}
</script>

<style scoped lang="scss">
.add-seria {
  display: flex;
  flex-direction: column;
  color: #b2b2b2;

  input {
    background-color: #191919;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 5px;
    color: #b2b2b2;
    width: 250px;
    height: 40px;
  }

  &__title {
    margin-bottom: 5px;
    font-weight: bold;
    padding-top: 10px;
  }

  &__button {
    background-color: #191919;
    padding: 10px 15px 10px 15px;
    margin-top: 20px;
    border-radius: 5px;
    width: 250px;
  }
}
</style>
