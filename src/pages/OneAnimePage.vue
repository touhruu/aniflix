<template>
  <div class="content-wrapper">
    <div class="content">
      <div class="blok-elem-anime">
        <div class="wrapper-picture">
          <div class="picture">
            <img :src="'http://141.8.194.146:3000/' + filmInfo.picture" />
          </div>
          <a href="#video"></a><button class="button-video"><p>Просмотр</p></button>
          <CustomSelect 
            :items="bookmarks" 
            title="Добавить в закладки" 
            @changeItem="changeBookmarks" 
            :multiselect="false"
            :itemHeight="40"
            color="#2b2b2b"
            :widthButton="250"
            :listWidth="250"
          />
          <!-- <select>
            <option value="0">Добавить в закладки</option>
            <option value="1">Смотрю</option>
            <option value="2">В планах</option>
            <option value="3">Брошено</option>
            <option value="4">Просмотрено</option>
            <option value="5">Любимое</option>
          </select> -->
        </div>
        <div class="infa-anime">
          <div class="title">{{ filmInfo.name }}</div>
          <div class="item-opisanie">
            <!-- <v-rating
              v-model="rating"
              color="white"
              active-color="yellow-accent-4"
              hover
              size="18"
              length=10
            ></v-rating> -->
          </div>
          <div class="item-opisanie">
            <div class="name">Эпизоды:</div>
            <div class="date">
              <p>{{ filmInfo.seria.length }} серий</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Дата выхода:</div>
            <div class="date">
              <p>{{ filmInfo.release_ani }}г</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Статус:</div>
            <div class="date">
              <p>{{ filmStatus }}</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Возраст:</div>
            <div class="date">
              <p>{{ filmInfo.age_limit }}</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Тип:</div>
            <div class="date">
              <p>{{ filmCategory }}</p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Жанр:</div>
            <div class="date">
              <p v-for="genre of filmInfo.Genres" :key="genre.id">
                {{ genre.name }}
              </p>
            </div>
          </div>
          <div class="item-opisanie">
            <div class="name">Студия:</div>
            <div class="date">
              <p>MAPPA</p>
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
        <p><b>Описание: </b>{{ filmInfo.description }}</p>
      </div>
        <!-- -->
        <VideoPlayer :filmInfo="filmInfo" id="video"/>
        <!-- -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from "vue-router";
import VideoPlayer from "../components/VideoPlayer"
import CustomSelect from "../components/CustomSelect"

const route = useRoute();
const store = useStore();

store.dispatch('onGetFullFilmInfo', route.params.id);

const filmInfo = computed(() => store.state.fullFilmInfo); //computed следит за изменениями и меняет верстку
const filmStatus = computed(() => filmInfo.value.Status && filmInfo.value.Status.name);
const filmCategory = computed(() => filmInfo.value.Category && filmInfo.value.Category.name);

const bookmarks = [
  {
    id: 1,
    name: 'Смотрю'
  }, 
  {
    id: 2,
    name: 'В планах'
  },
  {
    id: 3,
    name: 'Брошено'
  }, 
  {
    id: 4,
    name: 'Просмотрено'
  },
  {
    id: 5,
    name: 'Любимое'
  }
]

function changeBookmarks(bookmarks){
  const newBookmark = { 
    bookmarkType: bookmarks.id,
    animeId: filmInfo.value.id
    }
  store.dispatch('addBookmark', newBookmark)
}
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
        height: 450px;
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
            object-fit: cover;
          }
        }

        .button-video {
          height: 40px;
          width: 100%;
          border-radius: 0px;
          background-color: #2b2b2b;
          font-size: 20px;
          font-weight: bold;
          box-shadow: none;
          border: 0px;
          margin-bottom: 10px;

          p {
            /*color: #ffffff;*/
            font-size: 16px;
          }
        }

        select{
          height: 50px;
          width: 100%;
          border-radius: 0px;
          background-color: #2b2b2b;
          font-size: 20px;
          font-weight: bold;
          box-shadow: none;
          border: 0px;
          margin-top: 5px;
          color: #ffffff;
          outline: none;
          text-align: center;

          option{
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
          }

          option:hover{
            background: yellow;
            outline: none;
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

    .opisanie{
      padding-top: 40px;
      padding-bottom: 40px;
      text-align: justify;
    }

    .text-bold{
      font-weight: bold;
    }
  }
}

.name {
  width: 100%;
  max-width: 120px;
  font-weight: bold;
}
</style>
