<template>
<router-link :to="'/anime/' + filmInfo.id">
  <div class="anime-item" :style="{'background-color': backgroundColor}">
    <div class="mark" v-if="filmInfo.bookmark">
      <img src="assets/icon/zakladka2.png" />
    </div>
    <template v-if="!bookmarkExit">
      <div class="mark" v-if="!filmInfo.bookmark">
        <img src="assets/icon/zakladki1.png" />
      </div>
    </template>
    <div class="exit" v-if="bookmarkExit" @click="deleteBookmark(bookmarkId, $event)">
      <img src="assets/icon/exit.png">
    </div>
    <div class="category-anime" :style="`background: ${filmInfo.Category.color}`">
      <p>{{ filmInfo.Category.name }}</p>
    </div>
    <div class="poster">
      <img :src="'http://141.8.194.146:3000/' + filmInfo.picture" v-if="filmInfo"/>
    </div>
    <div class="opisanie">
      <div class="title">
        <p>{{ filmInfo.name }}</p>
      </div>
      <p><b>Эпизоды: </b>23 серий</p>
      <p><b>Год: </b>{{ filmInfo.release_ani }}</p>
      <p>
        <b>Жанр: </b>
        <template v-for="(genre, index) of filmInfo.Genres" :key="genre.id">
          <span>{{ genre.name }}</span>
          <span v-if="index < filmInfo.Genres.length-1">, </span>
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
import { useStore } from "vuex"
import { defineProps, toRefs } from "vue"

const store = useStore()

const props = defineProps({
  filmInfo: Object,
  backgroundColor: { type: String, default: '#2b2b2b' },
  bookmarkExit: { type: Boolean, default: false },
  bookmarkId: null
});

const { filmInfo, backgroundColor, bookmarkExit, bookmarkId } = toRefs(props)

function deleteBookmark(bookmarkId, event){
  event.preventDefault()
  store.dispatch('deleteBookmark', bookmarkId)
}
</script>

<style lang="scss" scoped>
a{
  height: 245px;
}

.anime-item {
  //max-width: 435px;
  height: 245px;
  display: flex;
  background-color: #2b2b2b;
  border-radius: 4%;
  margin-bottom: 35px;
  //margin: 0px 20px 20px 0px;
  position: relative;

  .poster {
    width: 170px;
    height: 100%;
    display: flex;
    border-radius: 4% 0% 0% 4%; //для картинки написать этот border

    img {
      border-radius: 4% 0% 0% 4%;
      width: 170px;
      object-fit: cover;
    }
  }

  .opisanie {
    width: 60%;
    height: 100%;
    color: #bbbbbb;
    padding: 15px 10px 10px 16px;

    .title {
      width: 100%;
      height: 60px;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;
      padding-top: 4px;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;

      title p {
        width: 100%;
        height: 60px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
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

  .exit{
    img{
      width: 20px;
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }
}
</style>
