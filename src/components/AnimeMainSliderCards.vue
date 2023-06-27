<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template>
               <div class="card__item" v-for="film of films" :key="film.id">
                <p>{{ film.name }}</p>
               </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const films = computed(() => store.state.films)

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>

<style scoped>
.card__item{
    width: 200px;
    height: 300px;
    background-color: red;
}
</style>
