<template>
  <div class="wrapper-content">
    <div class="wallpaper-img">
      <img :src="'http://localhost:3000/' + user.backgraund" v-if="user" />
      <div class="buttonFonUpdate">
        <DownloadButtonFon />
      </div>
    </div>
    <div class="wrapper-info">
      <div class="wrapper-profile">
        <div class="profile">
          <div class="foto">
            <img :src="'http://localhost:3000/' + user.avatar" v-if="user" />
            <div class="buttonUpdateAvatar">
              <DownloadButton />
            </div>
          </div>
          <p v-if="user">{{ user.name }}</p>
          <button data-id="1" @click="switchTabMenu($event)">Закладки</button>
          <button data-id="2" @click="switchTabMenu($event)">
            Редактировать профиль
          </button>
          <button data-id="3" @click="switchTabMenu($event)">Добавить аниме</button>
          <button @click="exit()">Выйти</button>
        </div>
      </div>
      <div class="wrapper">
        <div class="status">
          <div class="wrapper-badge">
            <div class="badge"></div>
            <p>online</p>
          </div>
          <div class="status-wrapper" v-if="showTextarea === false">
            <p v-if="user">
              {{ user.status }}
            </p>
            <p v-if="user.status === null">Введите Ваш статус</p>
            <button class="status-update" @click="showTextareaStatus()">
              <img src="assets/icon/update.png" />
            </button>
          </div>
          <div class="status-wrapper" v-if="showTextarea === true">
            <textarea placeholder="Введите статус" v-model="userStatus.status"></textarea>
            <div class="button-wrapper-status">
              <button class="use" @click="updateUserStatus()">
                <img src="assets/icon/select.png" />
              </button>
              <button class="cancel" @click="showTextarea = false">
                <img src="assets/icon/exit.png" />
              </button>
            </div>
          </div>
        </div>
        <div class="info" :class="{ show: 1 == selectedMenuId }">
          <div class="tab-field">
            <div
              class="tab"
              data-id="1"
              :class="{ activ: 1 == selectedTabId }"
              @click="switchTab($event)"
            >
              Смотрю
            </div>
            <div
              class="tab"
              data-id="2"
              :class="{ activ: 2 == selectedTabId }"
              @click="switchTab($event)"
            >
              В планах
            </div>
            <div
              class="tab"
              data-id="3"
              :class="{ activ: 3 == selectedTabId }"
              @click="switchTab($event)"
            >
              Брошено
            </div>
            <div
              class="tab"
              data-id="4"
              :class="{ activ: 4 == selectedTabId }"
              @click="switchTab($event)"
            >
              Просмотрено
            </div>
            <div
              class="tab"
              data-id="5"
              :class="{ activ: 5 == selectedTabId }"
              @click="switchTab($event)"
            >
              Любимое
            </div>
          </div>
          <div class="content-tab" :class="{ show: WATCH_NOW == selectedTabId }">
            <div class="content-card">
              <template v-for="bookmark of bookmarks" :key="bookmark.id">
                <AnimeCard
                  :filmInfo="bookmark.Anime"
                  :bookmarkId="bookmark.id"
                  :bookmarkExit="true"
                  backgroundColor="#191919"
                  v-if="bookmark.bookmarkType === WATCH_NOW"
                />
              </template>
            </div>
          </div>
          <div class="content-tab" :class="{ show: GONA_VIEW == selectedTabId }">
            <div class="content-card">
              <template v-for="bookmark of bookmarks" :key="bookmark.id">
                <AnimeCard
                  :filmInfo="bookmark.Anime"
                  :bookmarkId="bookmark.id"
                  :bookmarkExit="true"
                  backgroundColor="#191919"
                  v-if="bookmark.bookmarkType === GONA_VIEW"
                />
              </template>
            </div>
          </div>
          <div class="content-tab" :class="{ show: ABANDONED == selectedTabId }">
            <div class="content-card">
              <template v-for="bookmark of bookmarks" :key="bookmark.id">
                <AnimeCard
                  :filmInfo="bookmark.Anime"
                  :bookmarkId="bookmark.id"
                  :bookmarkExit="true"
                  backgroundColor="#191919"
                  v-if="bookmark.bookmarkType === ABANDONED"
                />
              </template>
            </div>
          </div>
          <div class="content-tab" :class="{ show: VIEWED == selectedTabId }">
            <div class="content-card">
              <template v-for="bookmark of bookmarks" :key="bookmark.id">
                <AnimeCard
                  :filmInfo="bookmark.Anime"
                  :bookmarkId="bookmark.id"
                  :bookmarkExit="true"
                  backgroundColor="#191919"
                  v-if="bookmark.bookmarkType === VIEWED"
                />
              </template>
            </div>
          </div>
          <div class="content-tab" :class="{ show: FAVORITE == selectedTabId }">
            <div class="content-card">
              <template v-for="bookmark of bookmarks" :key="bookmark.id">
                <AnimeCard
                  :filmInfo="bookmark.Anime"
                  :bookmarkId="bookmark.id"
                  :bookmarkExit="true"
                  backgroundColor="#191919"
                  v-if="bookmark.bookmarkType === FAVORITE"
                />
              </template>
            </div>
          </div>
        </div>
        <div class="info" :class="{ show: 2 == selectedMenuId }">
          <div class="info__title">
            <p>Редактирование личного кабинета</p>
          </div>
          <div class="info__wrapper">
            <div class="info__name">
              <p>Имя</p>
            </div>
            <div class="info__forma">
              <div class="info__forma__image">
                <img src="assets/icon/update.png" class="info__forma__image" />
              </div>
              <input
                class="info__forma__input"
                type="text"
                placeholder="Введите новое имя"
                v-model="userName.name"
              />
            </div>
            <div class="info__forma">
              <button class="info__forma__button" @click="updateName()">
                Редактировать
              </button>
            </div>
          </div>
          <div class="info__wrapper">
            <div class="info__name">
              <p>Логин</p>
            </div>
            <div class="info__forma">
              <div class="info__forma__image">
                <img src="assets/icon/login.png" class="info__forma__image" />
              </div>
              <input
                class="info__forma__input"
                type="text"
                placeholder="Введите новый логин"
                v-model="userEmail.email"
              />
            </div>
          </div>
          <div class="info__wrapper">
            <div class="info__forma">
              <div class="info__forma__image">
                <img src="assets/icon/pass.png" class="info__forma__image" />
              </div>
              <input
                class="info__forma__input"
                type="text"
                placeholder="Введите пароль"
                v-model="userEmail.password"
              />
            </div>
            <div class="info__forma">
              <button class="info__forma__button" @click="updateMail()">
                Редактировать
              </button>
            </div>
          </div>
          <div class="info__wrapper">
            <div class="info__name">
              <p>Пароль</p>
            </div>
            <div class="info__forma">
              <div class="info__forma__image">
                <img src="assets/icon/pass.png" class="info__forma__image" />
              </div>
              <input
                class="info__forma__input"
                type="text"
                placeholder="Введите старый пароль"
                v-model="userPassword.password"
              />
            </div>
          </div>
          <div class="info__forma">
            <div class="info__forma__image">
              <img src="assets/icon/pass.png" class="info__forma__image" />
            </div>
            <input
              class="info__forma__input"
              type="text"
              placeholder="Введите новый пароль"
              v-model="userPassword.newPassword"
            />
          </div>
          <div class="info__forma">
            <div class="info__forma__image">
              <img src="assets/icon/pass.png" class="info__forma__image" />
            </div>
            <input
              class="info__forma__input"
              type="text"
              placeholder="Повторите пароль"
              v-model="userPassword.repeatPassword"
            />
          </div>
          <div class="info__forma">
            <button class="info__forma__button" @click="updatePassword()">
              Редактировать
            </button>
          </div>
        </div>
        <div class="info" :class="{ show: 3 == selectedMenuId }">
          <AddAnime/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import AnimeCard from "../components/AnimeCard";
import DownloadButton from "../components/DownloadButton";
import DownloadButtonFon from "../components/DownloadButtonFon";
import AddAnime from "../components/AddAnime";

const router = useRouter();
const store = useStore();

const user = computed(() => store.state.user);

const showTextarea = ref(false);

//bookmark
const WATCH_NOW = 1;
const GONA_VIEW = 2;
const ABANDONED = 3;
const VIEWED = 4;
const FAVORITE = 5;
//update profile
const userName = ref({
  name: "",
});

const userEmail = ref({
  email: "",
  password: "",
});

const userPassword = ref({
  password: "",
  newPassword: "",
  repeatPassword: "",
});

const userStatus = ref({
  status: ""
});

onMounted(() => {
  if (user.value) {
    if (userName.value.name == "") {
      userName.value.name = user.value.name;
    }
    if (userEmail.value.email == "") {
      userEmail.value.email = user.value.email;
    }
  }
});

function updateName() {
  store.dispatch("updateUserName", userName.value);
}

function updateMail() {
  store.dispatch("updateUserMail", userEmail.value);
}

function updatePassword() {
  store.dispatch("updateUserPass", userPassword.value);
}

function updateUserStatus() {
  store.dispatch("updateUserStatus", userStatus.value);
  showTextarea.value = false;
}

store.dispatch("onGetBookmark");
const bookmarks = computed(() => store.state.bookmark);
// const AnimeBookmarks = computed(() => store.getters.bookmarkAnime)
// console.log(AnimeBookmarks)

const selectedTabId = ref(1);
const selectedMenuId = ref(1);

function switchTab(event) {
  selectedTabId.value = event.target.dataset.id;
}

function switchTabMenu(event) {
  selectedMenuId.value = event.target.dataset.id;
}

function showTextareaStatus() {
  showTextarea.value = true;
  console.log(showTextarea.value);
}

function exit() {
  store.dispatch("logout");
  router.push("/");
}
</script>

<style scoped lang="scss">
.wrapper-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wallpaper-img {
  width: 80%;
  height: 400px;
  display: flex;
  //background-color: red;
  margin-top: 30px;
  position: relative;

  img {
    min-width: 100%;
    height: 400px;
    border-radius: 20px;
    position: relative;
  }

  .buttonFonUpdate {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

.wrapper-info {
  width: 76%;
  height: 1000px;
  //background-color: white;
  display: flex;
  position: absolute;
  top: 375px;

  .wrapper-profile {
    width: 30%;
    //background-color: #2b2b2b;

    .profile {
      width: 95%;
      background-color: #2b2b2b;
      border-radius: 20px;
      margin-right: 5%;
      padding: 30px 20px 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .foto {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        //background-color: red;
        img {
          width: 175px;
          height: 175px;
          border-radius: 100%;
          background-position: 50% bottom;
          object-fit: cover;
        }

        .buttonUpdateAvatar {
          position: absolute;
          bottom: 0px;
          right: 60px;
        }
      }

      p {
        color: #b2b2b2;
        font-size: 24px;
        font-weight: bold;
        padding-top: 10px;
      }
    }

    button {
      background-color: #1e1e1e;
      color: #b2b2b2;
      font-weight: bold;
      border-radius: 10px;
      width: 100%;
      height: 50px;
      margin-bottom: 5px;
    }
  }

  .wrapper {
    width: 70%;
    display: flex;
    flex-direction: column;
    //background-color: red;

    .status {
      width: 100%;
      height: 100px;
      background-color: #1e1e1e;
      border-radius: 20px;
      margin-bottom: 50px;
      padding: 20px;
      display: flex;
      flex-direction: column;

      p {
        color: #b2b2b2;
        font-weight: bold;
      }

      .status-wrapper {
        display: flex;
        width: 100%;

        textarea {
          width: 100%;
          height: 45px;
          background-color: #2b2b2b;
          border-radius: 8px;
          max-height: 45px;
          color: #b2b2b2;
          padding: 2px;
        }

        .button-wrapper-status {
          display: flex;
          flex-direction: column;

          .cancel {
            background-color: #383838;
            margin-top: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            margin-left: 10px;
          }

          .use{
            background-color: green;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            margin-left: 10px;
          }

          img {
            width: 20px;
            height: 20px;
          }
        }
      }

      .status-update {
        background-color: #a96d12;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        border-radius: 6px;
        margin-left: 6px;
      }

      .status-update img {
        width: 20px;
        height: 20px;
      }

      .wrapper-badge {
        width: 100%;
        display: flex;
        align-items: center;

        .badge {
          width: 8px;
          height: 8px;
          background-color: green;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }

    .info {
      width: 100%;
      background-color: #2b2b2b;
      border-radius: 20px;
      padding: 20px;
      display: none;

      &__name {
        text-align: start;
        color: #b2b2b2;
      }

      &__wrapper {
        display: flex;
        flex-direction: column;
      }

      .tab-field {
        width: 100%;
        border-bottom: 4px solid #1e1e1e;
        display: flex;

        .tab {
          width: 100%;
          height: 40px;
          color: #b2b2b2;
          font-weight: bold;
          border-radius: 10px 10px 0px 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .activ {
          background-color: #191919;
        }
      }

      .content-tab {
        width: 100%;
        //display: grid;
        //grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        //grid-gap: 5px;
        display: none;
      }

      .content-card {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        grid-gap: 20px;
        padding-top: 20px;
        //background-color: #191919;
      }

      .show {
        display: block;
      }

      &__title {
        width: 100%;
        text-align: center;
        color: #b2b2b2;
        font-weight: bold;
        padding-bottom: 10px;
      }

      .info__forma {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        &__image {
          width: 45px;
          height: 45px;
          background-color: #191919;
          border-radius: 8px 0px 0px 8px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 20px;
            height: 20px;
          }
        }

        &__input {
          background-color: #191919;
          max-width: 280px;
          height: 45px;
          padding: 6px 12px 6px 12px;
          border-radius: 0px 8px 8px 0px;
          outline: none;
          color: #bbbbbb;
        }

        &__button {
          background-color: #191919;
          max-width: 150px;
          height: 45px;
          padding: 6px 12px 6px 12px;
          border-radius: 8px;
          outline: none;
          color: #bbbbbb;
        }
      }
    }

    .show {
      display: block;
    }
  }
}
</style>
