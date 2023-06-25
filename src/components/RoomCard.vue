<template>
<router-link :to="'/room/' + room.url">
<template v-if="room.Anime">
  <div class="card-blok">
    <div class="card-wrapper">
      <div class="card">
        <div class="shadow-card">
           <p>{{ room.Anime && room.Anime.name }}</p> <!-- room.Anime если его нет, то код после && не сработает -->
        </div>
        <img class="cover" :src="room.Anime.picture" />
      </div>
    </div>
    <div class="participant">
      <p>Участники: 1</p>
    </div>
  </div>
</template>  
</router-link>
</template>

<script setup>
import { defineProps, toRefs } from "vue"


const props = defineProps({
  room: Object
});

const { room } = toRefs(props)
</script>

<style scoped lang="scss">
.card-blok {
  position: relative;
}

.card-wrapper {
  position: releative;
}

.card {
  width: 210px;
  height: 310px;
  background-color: #2b2b2b;
  border-radius: 8px;
  overflow: hidden;
  position: releative;

  .cover {
    border-radius: 8px;
    transition-duration: 1s;
    position: releative;
    z-index: 1;
  }
}

.shadow-card {
  width: 210px;
  height: 310px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
  transition-duration: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  p {
    font-size: 24px;
    color: #bbbbbb;
    font-weight: 600;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.shadow-card:hover {
  transition-duration: 1s;
  position: absolute;
  opacity: 0;
}

.shadow-card:hover + .cover {
  transform: scale(1.1);
  transition-duration: 1s;
  z-index: 1;
}

.participant {
  background-color: #a96d12;
  position: absolute;
  z-index: 2;
  bottom: 15px;
  left: -8px;
  padding: 5px 10px 5px 10px;
  border-radius: 5px 5px 5px 5px;
  font-weight: bold;
  color: #e8e8e8;
}
</style>
