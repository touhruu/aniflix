<template>
  <MenuHeader />
  <router-view></router-view>
</template>

<script setup>
import { useStore } from "vuex";
import MenuHeader from "./components/MenuHeader.vue";

const store = useStore();

store.dispatch("whoAmI")
store.dispatch("onGetBookmark")
store.dispatch("onGetFilmsRequest")
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #191919;
}

a {
  text-decoration: none;
}

p {
  font-family: GothamProRegular, sans-serif;
}

body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: #191919;
}

body::-webkit-scrollbar-thumb {
  background: #2b2b2b;
  border-radius: 20px; 
}
</style>
