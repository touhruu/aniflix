<template>
  <div class="video-pleer" v-if="filmInfo.seria && filmInfo.seria[numberSeria]">
    <video controls="controls" :key="numberSeria">
      <source
        :src="'http://141.8.194.146:3000/' + filmInfo.seria[numberSeria].Video.videoFile"
      />
    </video>
    <v-pagination
      :length="filmInfo.seria.length"
      @update:modelValue="changeVideo"
    ></v-pagination>
  </div>
</template>

<script setup>
import { defineProps, toRefs, ref } from "vue";

const props = defineProps({
  filmInfo: Object,
});

const { filmInfo } = toRefs(props);

const numberSeria = ref(0);

function changeVideo(number) {
  numberSeria.value = number - 1;
  console.log(numberSeria.value);
}
</script>

<style lang="scss" scoped>
.video-pleer {
  width: 100%;
  color: #bbbbbb;

  video {
    width: 100%;
    min-height: 450px;
  }
}
</style>
