<template>
  <div class="header">
    <router-link to="/">
      <div class="header-item">
        <p>ЛОГО</p>
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
    <router-link to="/">
      <div class="header-item">
        <p>СЛУЧАЙНОЕ АНИМЕ</p>
      </div>
    </router-link>
    <div class="header-items-form">
      <div class="form-wrapper">
        <input class="input-search" type="text" placeholder="Поиск" />
        <button class="button-search" type="submit">
          <img src="assets/icon/search.png" />
        </button>
      </div>

      <button class="button-auth" type="submit">
        <p>ВОЙТИ</p>
      </button>
    </div>
  </div>
</template>

<script setup></script>

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
}

.form-wrapper {
  display: flex;
  flex-direction: row;
}

.input-search {
  background-color: #2b2b2b;
  max-width: 100px;
  height: 35px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px 0px 0px 8px;
  outline: none;
  color: #bbbbbb;
}

.input-search::-webkit-input-placeholder {
  color: #bbbbbb;
}

.button-search {
  height: 35px;
  background-color: #2b2b2b;
  border-radius: 0px 8px 8px 0px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px 6px 12px;

  img {
    width: 18px;
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
