<template>
<div class="select-wrapper">
  <button class="custom-button" :style="{'background-color': color, 'width': widthButton + 'px'}" ref="expandButton">
    <p v-if="!newTitle">{{ title }}</p>
    <p v-if="newTitle">{{ newTitle }}</p>
    <div class="arrow-image">
      <img src="/assets/icon/arrow.png">
    </div>
  </button>
  <div :class="{ off: !isOpen }" class="list" ref="list" :style="{'width': listWidth + 'px'}">
    <label v-for="item of items" :key="item.id" @click="$emit('changeItemId', item.id)">
      <template v-if="multiselect">
        <input type="checkbox" :value="item.name" v-model="isChecked"/>
      </template>
      <p :style="`height: ${itemHeight}px`" @click="itemClick(item)">{{ item.name }}</p>
    </label>
  </div>
</div>
</template>

<script setup>
import {defineProps, toRefs, ref, onMounted, watch, defineEmits} from "vue";

const props = defineProps({
  items: Array,
  title: String,
  multiselect: { type: Boolean, default: true },
  itemHeight: { type: Number, default: 26},
  color: { type: String, default: '#191919'},
  widthButton: { type: Number, default: 220},
  listWidth: { type: Number, default: 220 }
});

const emit = defineEmits(['changeItem'])

const { items, title, multiselect, itemHeight, color, widthButton, listWidth } = toRefs(props);

const isOpen = ref(false); // переменные ref() меняют верстку
const newTitle = ref("");
const expandButton = ref();
const list = ref();
const isChecked = ref([]);

onMounted(() => {
  expandButton.value.addEventListener("click", function () {
    if(!isOpen.value)
    setTimeout(() => isOpen.value = true, 0);
  });

  list.value.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    isOpen.value = false;
  });
});

watch(isChecked, (currentValue) => {
  // console.log("Текущее значение", isChecked);
  newTitle.value = currentValue.join(", ");
  emit('changeItem', currentValue);
});

function itemClick(item){
  if(!multiselect.value){
    emit('changeItem', item)
    isOpen.value = false
  }
}

</script>

<style lang="scss" scoped>

.select-wrapper{
  position: relative;
}

.custom-button {
  width: 240px;
  height: 44px;
  background-color: #191919;
  padding: 10px 10px 10px 10px;
  display: flex;
  justify-content: start;

  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    min-width: 170px;
    display: flex;
    justify-content: start;
  }

  .arrow-image{
    display: flex;
    width: 100%;
    justify-content: end;
  }

  img{
    width: 25px;
  }
}

.list {
  width: 200px;
  max-height: 210px;
  background-color: white;
  overflow-y: auto;
  user-select: none;
  display: flex;
  flex-direction: column;
  padding: 5px;
  position: absolute;
  top: 44px;
  z-index: 10;
}

.list::-webkit-scrollbar {
  width: 10px;
}

.list::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: white;
}

.list::-webkit-scrollbar-thumb {
    background: #bbbbbb;
    border-radius: 20px; 
}

label {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 5px;

  p {
    height: 100%;
    padding-left: 5px;
    display: flex;
    align-items: center;
  }
}

label:hover{
  background-color: #c9c9c9;
  color: white;
}

.off {
  display: none;
}
</style>