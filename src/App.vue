<template>
  <MenuHeader />
  <router-view></router-view>
</template>

<script setup>
import MenuHeader from "./components/MenuHeader.vue";
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
  background: linear-gradient(180deg, #2b2b2b, #bbbbbb);
}
</style>
