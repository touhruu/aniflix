<template>
  <button class="custom-button" @click="expandButton">
    <p v-if="!newTitle">{{ title }}</p>
    <p v-if="newTitle">{{ newTitle }}</p>
  </button>
  <div class="list" v-if="isOpen">
    <label v-for="item of items" :key="item.id" @click="selectItem(item)">
      <input type="checkbox" value="text" />
      <p>{{ item.name }}</p>
    </label>
  </div>
</template>

<script setup>
import { defineProps, toRefs, ref } from "vue";

const props = defineProps({
  items: Array,
  title: String
});

const { items, title } = toRefs(props);

const isOpen = ref(false); // переменные ref() меняют верстку
const newTitle = ref('');
function expandButton() {
  isOpen.value = true; // к переменным которые через ref() обращаться с помощью value
}

function selectItem(item){
    console.log(item);
    newTitle.value = item.name;
}
</script>

<style lang="scss" scoped>
.custom-button {
  width: 200px;
  background-color: #191919;
  padding: 10px 10px 10px 10px;
  display: flex;
  justify-content: start;
}

.list {
  width: 200px;
  max-height: 200px;
  background-color: white;
  overflow-y: auto;
  user-select: none;
  display: flex;
  flex-direction: column;
  padding: 5px;
}

label {
  display: flex;
  align-items: center;

  p{
    padding-left: 5px;
  }
}
</style>
