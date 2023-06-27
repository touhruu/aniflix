<template>
  <v-slide-group
    v-model="model"
    class="pa-4"
    selected-class="bg-primary"
    multiple
    show-arrows
  >
    <v-slide-group-item
      v-for="film in films"
      :key="film.id"
      v-slot="{ toggle }"
    >
      <v-card
        color="#191919"
        class="ma-4"
        height="300"
        width="200"
        @click="toggle"
      >
      <router-link :to="'/anime/' + film.id">
        <div class="d-flex fill-height">
        
          <div class="anime__card">
            <img class="anime__card__image" :src="'http://141.8.194.146:3000/' + film.picture">
            <div class="anime__card__title">
              <p>{{ film.name }}</p>
            </div>
          </div>
        
        </div>
        </router-link>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from "vuex";

    const store = useStore();

    const films = computed(() => store.state.films)
    const model = ref([])
</script>

<style scoped lang="scss">
.anime__card{
  display: flex;
  flex-direction: column;

  &__image{
    width: 200px;
    height: 280px;
    background-color: red;
    object-fit: cover;
  }

  &__title{
    display: flex;
    justify-content: center;
    color: #b2b2b2;
    font-weight: bold;
    font-size: 18px;
    align-items: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
