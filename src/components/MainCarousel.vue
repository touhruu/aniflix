<template>
  <v-carousel :show-arrows="false" cycle interval="3000">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
const items = [
  {
    src: "assets/icon/picture.png",
  },
  {
    src: "https://phonoteka.org/uploads/posts/2021-04/1619695181_23-phonoteka_org-p-fon-dlya-rabochego-stola-estetika-anime-23.jpg",
  },
  {
    src: "https://img1.akspic.ru/crops/9/2/8/9/6/169829/169829-anime_pejzazh-anime-art-teatralnye_dekoracii-peyzash-3840x2160.png",
  },
  {
    src: "https://wallpx.com/image/2021/07/anime-city-clouds-kimi-no-na-wa-falling-star-your-name.jpg",
  },
];
</script>
