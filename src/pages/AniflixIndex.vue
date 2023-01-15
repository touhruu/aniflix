<template>
  <div class="content">
    <div class="carusel">
      <MainCarousel />
    </div>
    <div class="filtr">
      <div class="filtr-select">
        <v-select
          clearable
          chips
          label="Жанры"
          :items="['Детектив', 'Гарем', 'Хентай', 'Яой', 'Сенен Ай', 'Комедия']"
          multiple
          variant="solo"
        ></v-select>
      </div>
      <div class="filtr-select">
        <v-select
          clearable
          chips
          label="Статус"
          :items="['Вышел', 'Анонс', 'Онгоинг']"
          multiple
          variant="solo"
        ></v-select>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainCarousel from "../components/MainCarousel.vue";
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}

.carusel {
  width: 100%;
  height: fit-content;
}

.filtr {
  width: 100%;
  height: 80px;
  background-color: #2b2b2b;
  display: flex;
  padding: 15px 5% 15px 5%;
}

.filtr-select {
  min-width: 200px;
  background-color: #191919;
  margin-right: 20px;
}

select {
  width: 100%;
  height: 100%;
  color: #bbbbbb;
  padding: 10px;
  outline: none;
}

option {
  background: grey;
  color: #191919;
}
</style>
