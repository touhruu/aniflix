<template>
    <div class="search-wrapper">
        <div class="form-wrapper">
            <input class="input-search" type="text" placeholder="Поиск" v-model="searchInput"/>
            <button class="button-search" type="submit">
            <img src="/assets/icon/search.png">
            </button>
        </div>
        <div :class="{ off: !isOpen }" class="list" ref="list">
            <template v-if="searchFilms.length > 0">
                <AnimeCardForSearchHeader 
                    v-for="film of searchFilms"
                    :key="film.id"
                    :film="film"
                    @click="clearInput()"
                />
            </template>
            
            <template v-if="searchFilms.length === 0">
                <p>Ничего не найдено</p>
                <img src="assets/icon/empty.png">
            </template>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch, onMounted, computed } from "vue"
    import { useStore } from "vuex"
    import AnimeCardForSearchHeader from "./AnimeCardForSearchHeader.vue"

    const store = useStore()

    const searchInput = ref('')
    const isOpen = ref(false)
    const list = ref()

    function clearInput(){
        searchInput.value = ""
    }

    watch(searchInput, () => {
        store.commit('setSearch', searchInput.value)
    })

    const searchFilms = computed(() => store.getters.searchFilms)

    onMounted(() => {
        watch(searchInput, () => {
            if(searchInput.value.length){
                if(!isOpen.value)
                setTimeout(() => isOpen.value = true, 0)
            }
        })

        list.value.addEventListener("click", function (event) {
            event.stopPropagation();
        })

        document.addEventListener("click", function () {
            isOpen.value = false;
        })

        watch(searchInput, () => {
            if(searchInput.value.length === 0){
                setTimeout(() => isOpen.value = false, 0)
            }
        })
    })
</script>

<style scoped lang="scss">

.search-wrapper{
    //width: 210px;
    position: relative;
}

.form-wrapper {
  display: flex;
  flex-direction: row;
}

.input-search {
  background-color: #2b2b2b;
  width: 140px;
  height: 35px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px 0px 0px 8px;
  outline: none;
  color: #bbbbbb;
}

.input-search::-webkit-input-placeholder {
  color: #bbbbbb;
}

.button-search {
  height: 35px;
  background-color: #2b2b2b;
  border-radius: 0px 8px 8px 0px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px 6px 12px;

  img {
    width: 18px;
  }
}

.list{
    width: 300px;
    max-width: 280px;
    background-color: #2b2b2b;
    max-height: 350px;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    position: absolute;
    z-index: 10;

    img{
        width: 100px;
    }
}

.list::-webkit-scrollbar {
  width: 10px;
}

.list::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #2b2b2b;
}

.list::-webkit-scrollbar-thumb {
    background: #222222;
    border-radius: 20px; 
}

.off {
  display: none;
}

</style>