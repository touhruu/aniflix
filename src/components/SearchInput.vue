<template>
    <div class="form-wrapper">
        <input class="input-search" type="text" placeholder="Поиск" v-model="searchInput"/>
        <button class="button-search" type="submit">
          <img src="/assets/icon/search.png">
        </button>
    </div>
</template>

<script setup>
    import {ref, watch} from "vue";
    import { useStore } from "vuex";

    const store = useStore();

    const searchInput = ref('');

    watch(searchInput, () => {
        store.commit('setSearch', searchInput.value)
    });
</script>

<style scoped lang="scss">

.form-wrapper {
  display: flex;
  flex-direction: row;
}

.input-search {
  background-color: #2b2b2b;
  max-width: 100px;
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

</style>