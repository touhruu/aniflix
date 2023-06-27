<template>
  <div class="content">
    <div class="carusel">
      <MainCarousel />
    </div>
    <div class="filtr">
      <p>Новинки</p>
    </div>
    <CardSlider />
    <AnimeMainSliderCards/>
  </div>
</template>

<script setup>
import MainCarousel from "../components/MainCarousel.vue";
import CardSlider from "../components/CardSlider.vue";
import AnimeMainSliderCards from "../components/AnimeMainSliderCards.vue";

</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  color: #b2b2b2;
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
  align-items: center;

  p{
    color: #b2b2b2;
    font-size: 26px;
    font-weight: bold;
    padding-left: 8px;
  }
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
