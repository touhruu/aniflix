<template>
  <div class="header">
    <router-link to="/">
      <div class="header-item">
        <img src="assets/icon/logo4.png">
      </div>
    </router-link>
    <router-link to="/">
      <div class="header-item">
        <p>ГЛАВНАЯ</p>
      </div>
    </router-link>
    <router-link to="/anime">
      <div class="header-item">
        <p>АНИМЕ</p>
      </div>
    </router-link>
    <a href="/anime-rand">
      <div class="header-item">
        <p>СЛУЧАЙНОЕ АНИМЕ</p>
      </div>
    </a>
    <router-link to="/joint-viewing" v-if="user">
      <div class="header-item">
        <p>СОВМЕСТНЫЙ ПРОСМОТР</p>
      </div>
    </router-link>
    <div class="header-items-form">
      <SearchForHeader

      />
      <router-link to="/anime/auth" v-if="!user">
        <button class="button-auth" type="submit">
          <p>ВОЙТИ</p>
        </button>
      </router-link>
      <router-link to="/user" v-if="user">
        <div class="header-user-lk">
          <img src="/assets/icon/avatar6.png">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useStore } from "vuex";
  import SearchForHeader from "./SearchForHeader.vue"

  const store = useStore();

  const user = computed(() => store.state.user);

</script>

<style lang="scss" scoped>
.header {
  width: 90%;
  height: 70px;
  background-color: #191919;
  display: flex;
  border-bottom: 2px solid #2b2a2a;
  margin-left: 5%;
  margin-right: 5%;
}

/*.router-link-active {
  .header-item p{
    color: white;
  }
}*/

.header-item {
  height: 100%;
  padding-right: 15px;
  padding-top: 30px;
  white-space: nowrap;

  & > :hover {
    color: white;
  }

  img{
    width: 130px;
    margin-top: -15px;
  }
}

.header-item p {
  color: #bbbbbb;
  font-size: 16px;
  font-weight: bold;
}

.header-items-form {
  width: 100%;
  display: flex;
  justify-content: end;
  padding-top: 20px;

  .header-user-lk{
    height: 100%;
    margin-top: -14px;
    img{
      //background-color: white;
      border-radius: 50%;
      width: 60px;
    }
  }
}

.button-auth {
  height: 35px;
  background-color: #2b2b2b;
  border-radius: 8px 8px 8px 8px;
  padding: 6px 12px 6px 12px;
  margin-left: 20px;
}

.button-auth p {
  color: #bbbbbb;
  font-weight: 500;
  font-size: 16px;
}
</style>
