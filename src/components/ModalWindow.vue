<template>
  <div class="modal">
    <p class="title">Создание комнаты</p>
    
    <v-radio-group v-model="roomType" column v-if="!isAnimeChouseVisible">
      <p class="text">Выберите тип комнаты:</p>
      <div class="card-wrapper">
        <label class="card">
          <v-radio label="Открытая" color="black" value="false"></v-radio>
          <p>В открытую комнату может зайти любой пользователь</p>
          <img src="assets/icon/6.png">
        </label>

        <label class="card">
          <v-radio label="Приватная" color="black" value="true" style="height: 80px;"></v-radio>
          <p>В приватную комнату можно войти только по ссылке</p>
          <img src="assets/icon/5.png">
        </label>
      </div>
    </v-radio-group>
    <div class="chouse-anime" v-if="isAnimeChouseVisible">
      <p>Введите название аниме в поиске:</p>
      <SearchForView @filmId="getAnimeId" />
    </div>
    <div class="next">
      <button @click="next()">Далее</button>
    </div>
  </div>
  <div class="exit" @click="$emit('close')">
    <img src="assets/icon/exit.png" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from 'vuex';
import { useRouter } from "vue-router";
import SearchForView from "../components/SearchForView.vue";

const router = useRouter();
const store = useStore();

const roomType = ref(false);
console.log(roomType.value);
const isAnimeChouseVisible = ref(false);

function next() {
  isAnimeChouseVisible.value = true;
}

function getAnimeId(id) {
  const room = {
    addRoom:{ privateRoom: roomType.value },
    AnimeId: id
  };
  store.dispatch("addRoom", room);
}

watch(() => store.state.room, (current) => {
  if(current){
    router.push(`/room/${current.url}`)
  }
})
</script>

<style scoped lang="scss">
.modal {
  background-color: white;
  width: 600px;
  min-height: 502px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px;

  .title {
    font-size: 24px;
    font-weight: bold;
    color: #2b2b2b;
    margin-bottom: 15px;
  }

  .next{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: end;
    margin-top: 5px;
  }

  .next button{
    background-color: #2b2b2b;
    color: #b2b2b2;
    padding: 8px;
    border-radius: 8px;
  }
}

.card-wrapper {
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  .card {
    width: 250px;
    height: 350px;
    box-shadow: 0px 0px 8px -1px rgba(34, 60, 80, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;

    img{
      width: 150px;
      padding-bottom: 10px;
    }

    p{
      width: 100%;
      text-align: center;
      color: #2b2b2b;
      height: 100%;
    }
  }
}

.exit {
  position: absolute;
  right: 20px;
  top: 25px;
  cursor: pointer;

  img {
    width: 25px;
  }
}

.chouse-anime {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text{
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
}
</style>
