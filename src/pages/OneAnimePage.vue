<template>
  <div class="content-wrapper">
    <div class="content">
      <div class="blok-elem-anime">
        <div class="wrapper-picture">
          <div class="picture">
            <img
              src="https://animego.org/media/cache/thumbs_250x350/upload/anime/images/633e7f7448591100276578.jpg"
            />
          </div>
          <button class="button-video"><p>Просмотр</p></button>
        </div>
        <div class="infa-anime">
          <div class="title">{{ filmInfo.name }}</div>
          <div class="item-opisanie">
            <div class="name">Эпизоды:</div>
            <div class="date">
              <p>{{ filmInfo.episodes }} серий</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Дата выхода:</div>
            <div class="date">
              <p>{{ filmInfo.year }}г</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Статус:</div>
            <div class="date">
              <p>{{ filmInfo.status }}</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Возраст:</div>
            <div class="date">
              <p>{{ filmInfo.age }}</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Тип:</div>
            <div class="date">
              <p>{{ filmInfo.type }}</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Жанр:</div>
            <div class="date">
              <p v-for="genre of filmInfo.genres" :key="genre.id">
                {{ genre.name }}
              </p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Режессер:</div>
            <div class="date">
              <p>{{ filmInfo.producer }}</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Студия:</div>
            <div class="date">
              <p>{{ filmInfo.studio }}</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Длительность:</div>
            <div class="date">
              <p>{{ filmInfo.duration }} мин</p>
            </div>
          </div>
        </div>
      </div>
      <div class="opisanie">
        <!-- -->
      </div>
      <div class="video-pleer">
        <!-- -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

store.dispatch('onGetFullFilmInfo', route.params.id);

const filmInfo = computed(() => store.state.fullFilmInfo); //computed следит за изменениями и меняет верстку
</script>

<style lang="scss" scoped>
.content-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  color: #bbbbbb;

  .content {
    width: 800px;
    display: flex;
    flex-direction: column;

    .blok-elem-anime {
      width: 100%;
      display: flex;

      .wrapper-picture {
        width: 250px;
        height: 390px;
        display: flex;
        flex-direction: column;

        .picture {
          width: 250px;
          height: 340px;
          display: flex;
          background-color: #bbbbbb;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .button-video {
          height: 50px;
          width: 100%;
          border-radius: 0px;
          background-color: #2b2b2b;
          font-size: 20px;
          font-weight: bold;
          box-shadow: none;
          border: 0px;

          p {
            color: #ffffff;
          }
        }
      }

      .infa-anime {
        width: 70%;
        padding-left: 20px;

        .title {
          font-weight: bold;
          font-size: 20px;
        }

        .item-opisanie {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding-bottom: 5px;
          padding-top: 5px;

          .name {
            width: 100%;
            max-width: 120px;
            font-weight: bold;
          }

          .date {
            display: flex;
            flex-wrap: wrap;

            p {
              background-color: #2b2b2b;
              border-radius: 5px;
              padding-left: 8px;
              padding-right: 8px;
              padding-top: 2px;
              padding-bottom: 2px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
