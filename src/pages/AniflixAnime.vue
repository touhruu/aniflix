<template>
  <div class="content">
    <div class="content-anime">
      <AnimeCard v-for="film of films" :key="film.id" :filmInfo="film"/>
    </div>
    <div class="content-search-anime">
      <p></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AnimeCard from '../components/AnimeCard';

const store = useStore();

store.dispatch('onGetFilmsRequest');

const films = computed(() => store.state.films)
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 2% 5% 0% 5%;
  border: 1px solid red;
  color: #bbb;
  display: flex;

  .content-anime {
    width: 70%;
    border: 1px solid green;
    display: flex;
    flex-wrap: wrap;
  }

  .content-search-anime {
    width: 30%;
    border: 1px solid blue;
    background-color: #2b2b2b;
  }
}
</style>
