<template>
<router-link :to="'/anime/' + film.id">
    <div class="card-anime">
        <div class="foto">
            <img :src="'http://141.8.194.146:3000/' + film.picture">
        </div>
        <div class="info-anime">
            <p class="title">{{film.name}}</p>
            <p class="description">{{ film.Category.name }} / {{ film.release_ani }} <template v-for="genre of film.Genres">{{ `/ ${genre.name} ` }}</template></p>
        </div>
    </div>
</router-link>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  film: Object
})

const { film } = toRefs(props)
</script>

<style scoped lang="scss">
a{
    color: #b2b2b2;
}

.card-anime{
    display: flex;
    border-bottom: 2px dashed #b2b2b22b;
    color: #b2b2b2;
}

.foto{
    width: 25%;
    height: 100px;
    background-color: red;
    display: flex;
    object-fit: cover;

    img{
        width: 70px;
        height: 100px;
        object-fit: cover;
    }
}

.info-anime{
    width: 75%;
    display: flex;
    flex-direction: column;
    padding-left: 5px;

    .title{
        font-weight: bold;
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}

</style>