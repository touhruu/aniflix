<template>
    <div class="add-anime">
        <p class="add-anime__title">Название аниме</p>
        <textarea type="text" placeholder="Введите название" class="add-anime__name" v-model="anime.name"></textarea>
        <p class="add-anime__title">Описание аниме</p>
        <textarea type="text" placeholder="Введите описание" class="add-anime__description" v-model="anime.description"></textarea>
        <p class="add-anime__title">Год выпуска аниме</p>
        <input type="text" placeholder="Введите год" v-model="anime.release_ani">
        <input type="text" placeholder="Продолжительность серии" v-model="anime.duration">
        <input type="text" placeholder="Возрастное ограничение" v-model="anime.age_limit">
        <input type="file" ref="file" @change="fileChange"/>
        <div class="add-anime__select-wrapper">
            <CustomSelect :items="genres" title="Выберите жанр" @changeItem="changeGenre" class="add-anime__select"/>
            <CustomSelect :items="category" title="Выберите категорию" @changeItemId="changeCategoryId" class="add-anime__select"/>
            <CustomSelect :items="status" title="Выберите статус" @changeItemId="changeStatusId" class="add-anime__select"/>
        </div>
        <div class="add-anime__wrapper-button">
            <button class="add-anime__button" @click="addAnime()">Добавить</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import CustomSelect from "../components/CustomSelect";
import { useIdFromGenreName } from "../hooks/useIdFromGenreName";

const store = useStore();

const genreName = ref([]);

const anime = ref({
    name: "",
    description: "",
    release_ani: "",
    duration: "",
    age_limit: "",
    picture: "",
    statusId: "",
    categoryId: "",
    genres: []
})

const genresId = useIdFromGenreName(genreName);
const file = ref(null);

watch(genresId, () => {
    anime.value.genres = genresId
})

store.dispatch("onGetGenres");
store.dispatch("onGetStatus");
store.dispatch("onGetCategory");

const genres = computed(() => store.state.genres);
const status = computed(() => store.state.status);
const category = computed(() => store.state.category);

function changeGenre(item) {
    genreName.value = item
}

function changeCategoryId(id) {
    anime.value.categoryId = id
    console.log(anime.value.categoryId)
}

function changeStatusId(id) {
    anime.value.statusId = id
    console.log(anime.value.statusId)
}

function fileChange() {
    console.log(file.value.files[0]);
    anime.value.picture = file.value.files[0];
}

function addAnime(){
    const animeData = {...anime.value};
    let formData = new FormData();
    Object.entries(animeData).forEach((element) => {
        formData.append(element[0], element[1]);
    })
    store.dispatch("onAnimeUploading", formData);
}
</script>

<style scoped lang="scss">
    .add-anime{
        display: flex;
        flex-direction: column;
        color: #b2b2b2;

        textarea{
            background-color: #191919;
            border-radius: 8px;
            margin-bottom: 10px;
            padding: 5px;
            color: #b2b2b2;
        }

        input{
            background-color: #191919;
            border-radius: 8px;
            margin-bottom: 10px;
            padding: 5px;
            color: #b2b2b2;
            width: 250px;
            height: 40px;
        }

        &__title{
            margin-bottom: 5px;
            font-weight: bold;
        }

        &__name{
            height: 60px;
            max-height: 60px;
        }

        &__description{
            height: 140px;
            max-height: 140px;
        }

        &__select-wrapper{
            display: flex;
        }

        &__select{
            margin-right: 10px;
        }

        &__wrapper-button{
            display: flex;
            justify-content: center;
        }

        &__button{
            background-color: #191919;
            padding: 10px 15px 10px 15px;
            margin-top: 20px;
            border-radius: 5px;
        }
    }
</style>