<template>
  <button class="custom-button" ref="expandButton">
    <p v-if="!newTitle">{{ title }}</p>
    <p v-if="newTitle">{{ newTitle }}</p>
  </button>
  <div :class="{ off: !isOpen }" class="list" ref="list">
    <label v-for="item of items" :key="item.id">
      <input type="checkbox" :value="item.name" v-model="isChecked"/>
      <p>{{ item.name }}</p>
    </label>
  </div>
</template>

<script setup>
import {defineProps, toRefs, ref, onMounted, watch, defineEmits} from "vue";

const props = defineProps({
  items: Array,
  title: String
});

const emit = defineEmits(['changeItem'])

const { items, title } = toRefs(props);

const isOpen = ref(false); // переменные ref() меняют верстку
const newTitle = ref("");
const expandButton = ref();
const list = ref();
const isChecked = ref([]);

onMounted(() => {
  expandButton.value.addEventListener("click", function (event) {
    event.stopPropagation();
    isOpen.value = !isOpen.value;
  });

  list.value.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    isOpen.value = false;
  });
});

watch(isChecked, (currentValue) => {
  // console.log("Текущее значение", currentValue);
  newTitle.value = currentValue.join(", ");
  emit('changeItem', currentValue);
});

</script>

<style lang="scss" scoped>
.custom-button {
  width: 200px;
  background-color: #191919;
  padding: 10px 10px 10px 10px;
  display: flex;
  justify-content: start;

  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
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

.off {
  display: none;
}
</style>
