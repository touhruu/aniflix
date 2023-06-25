<template>
  <div class="content">
    <div class="content-search-anime">
      <div class="item-select">
        <CustomSelect :items="genres" title="Выберите жанр" @changeItem="changeGenre" />
      </div>
      <div class="item-select">
        <CustomSelect :items="category" title="Выберите категорию" @changeItem="changeCategory" />
      </div>
      <div class="item-select">
        <CustomSelect :items="status" title="Выберите статус" @changeItem="changeStatus" />
      </div>
      <!-- если текст, то : ставить не надо -->
    </div>
    <div class="content-anime" v-if="genryFiltrFilms.length > 0">
      <AnimeCard v-for="film of genryFiltrFilms" :key="film.id" :filmInfo="film" />
    </div>
    <div v-if="genryFiltrFilms.length === 0">
      <p>По вашему запросу ничего не найдено</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import AnimeCard from "../components/AnimeCard";
import CustomSelect from "../components/CustomSelect";

const store = useStore();

store.dispatch("onGetGenres");
store.dispatch("onGetStatus");
store.dispatch("onGetCategory");

const filter = ref({
  genreFilter: [],
  categoryFilter: [],
  statusFilter: [],
});

// const films = computed(() => store.state.films);
const genres = computed(() => store.state.genres);
const status = computed(() => store.state.status);
const category = computed(() => store.state.category);
const genryFiltrFilms = computed(() => store.getters.genryFiltrFilms(filter.value));
// const countFilms = computed(() => store.getters.countFilms);

function changeGenre(selectedArray) {
  filter.value.genreFilter = selectedArray;
}

function changeCategory(selectedArray) {
  filter.value.categoryFilter = selectedArray;
}

function changeStatus(selectedArray) {
  filter.value.statusFilter = selectedArray;
}

</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 2% 5% 0% 5%;
  color: #bbb;
  display: flex;
  flex-direction: column;

  .content-anime {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 20px;
  }

  .content-search-anime {
    width: 100%;
    background-color: #2b2b2b;
    display: flex;
    margin-bottom: 2%;
    padding: 10px;

    .item-select {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }
  }
}
</style>
