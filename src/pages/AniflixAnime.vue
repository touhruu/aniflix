<template>
  <div class="content">
    <div class="content-anime">
      <AnimeCard v-for="film of films" :key="film.id" :filmInfo="film"/>
    </div>
    <div class="content-search-anime">
      <CustomSelect
          :items="genres"
          title="Выберите жанр"
          @changeItem="change"
      />

      <CustomSelect
          :items="category"
          title="Выберите категорию"
          @changeItem="change"
      />

      <CustomSelect
          :items="status"
          title="Выберите статус"
          @changeItem="change"
      />
      <!-- если текст, то : ставить не надо -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AnimeCard from '../components/AnimeCard';
import CustomSelect from '../components/CustomSelect';

const store = useStore();

store.dispatch('onGetFilmsRequest');
store.dispatch('onGetGenres');
store.dispatch('onGetStatus');
store.dispatch('onGetCategory');

const films = computed(() => store.state.films);
const genres = computed(() => store.state.genres);
const status = computed(() => store.state.status);
const category = computed(() => store.state.category);

function change(selectedArray){
  console.log(selectedArray)
}
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
