<template>
  <button class="custom-button" ref="expandButton">
    <p v-if="!newTitle">{{ title }}</p>
    <p v-if="newTitle">{{ newTitle }}</p>
  </button>
  <div class="list" v-class="{off: !isOpen}" ref="list">
    <label v-for="item of items" :key="item.id" @click="selectItem(item)">
      <input type="checkbox" value="text" />
      <p>{{ item.name }}</p>
    </label>
  </div>
</template>

<script setup>
import { defineProps, toRefs, ref, onMounted } from "vue";

const props = defineProps({
  items: Array,
  title: String,
});

const { items, title } = toRefs(props);

const isOpen = ref(false); // переменные ref() меняют верстку
const newTitle = ref("");
const expandButton = ref();
const list = ref();

onMounted(() => {
  // console.log(expandButton.value);

  expandButton.value.addEventListener("click", function (event) {
    event.stopPropagation();
    isOpen.value = true;
  });

  console.log(list)
  list.value.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    isOpen.value = false;
  });
});
// function expandButton() {
//   isOpen.value = !isOpen.value; // к переменным которые через ref() обращаться с помощью value
// }

function selectItem(item) {
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

  p {
    padding-left: 5px;
  }
}

.off{
  display: none;
}
</style>
