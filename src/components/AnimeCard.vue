<template>
<router-link :to="'/anime/' + filmInfo.id">
  <div class="anime-item">
    <div class="mark">
      <img src="assets/icon/zakladki1.png" />
    </div>
    <div class="category-anime">
      <p>Сериал</p>
    </div>
    <div class="poster">
      <img :src="filmInfo.picture" />
    </div>
    <div class="opisanie">
      <div class="title">
        <p>{{ filmInfo.name }}</p>
      </div>
      <p><b>Эпизоды: </b>{{ filmInfo.episodes }} серий</p>
      <p><b>Год: </b>{{ filmInfo.year }}</p>
      <p>
        <b>Жанр: </b>
        <template v-for="(genre, index) of filmInfo.genre" :key="genre.id">
          <span>{{ genre.name }}</span>
          <span v-if="index < filmInfo.genre.length-1">, </span>
        </template>
      </p>
      <div class="anime-rating">
        <div class="item-rating">
          <img src="assets/icon/messeg1.png" />
          <p>162</p>
        </div>
        <div class="item-rating">
          <img src="assets/icon/like1.png" />
          <p>62%</p>
        </div>
      </div>
    </div>
  </div>
</router-link>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  filmInfo: Object,
});

const { filmInfo } = toRefs(props);
</script>

<style lang="scss" scoped>
.anime-item {
  width: 450px;
  height: 245px;
  display: flex;
  background-color: #2b2b2b;
  border-radius: 4%;
  margin: 0px 29px 29px 0px;
  position: relative;

  .poster {
    width: 170px;
    height: 100%;
    display: flex;
    background: #bbb;
    border-radius: 4% 0% 0% 4%; //для картинки написать этот border

    img {
      border-radius: 4% 0% 0% 4%;
    }
  }

  .opisanie {
    width: 60%;
    height: 100%;
    color: #bbbbbb;
    padding: 15px 10px 10px 16px;

    .title {
      width: 100%;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;
      padding-top: 4px;
      word-break: break-word;

      title p {
        width: 100%;
        height: 60px;
        text-overflow: ellipsis;
      }
    }

    .anime-rating {
      width: 100%;
      display: flex;
      margin-top: 10px;

      .item-rating {
        background-color: #191919;
        padding: 4px 8px 4px 8px;
        border-radius: 12%;
        display: flex;
        align-items: center;
        margin-right: 10px;

        img {
          height: 16px;
          width: 15px;
          margin-right: 8px;
        }
      }
    }
  }

  .category-anime {
    background-color: #3c811c;
    position: absolute;
    bottom: 15px;
    left: -5px;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 0px 5px 5px 0px;

    p {
      color: #e8e8e8;
      font-weight: bold;
    }
  }

  .mark {
    img {
      width: 20px;
      position: absolute;
      right: 25px;
      top: -2px;
    }
  }
}
</style>
