import { watch, ref } from "vue";
import { useStore } from "vuex";

export const useIdFromGenreName = (genres) => {
    const store = useStore();
    const genresArray = ref([])
    watch( genres, () => {
        genresArray.value.splice(0, genresArray.value.length)
        for(let i = 0; i < genres.value.length; i++){
            genresArray.value.push(store.state.genres.find((elem) => elem.name === genres.value[i]).id)
        }
    })
    
    return genresArray.value;
}
