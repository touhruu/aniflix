<template>
    <div>
        <input type="file" ref="file"/>
        <button @click="addVideo()">Добавить</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useStore } from 'vuex';

    const store = useStore();

    const file = ref(null)
    
    function addVideo(){
        let formData = new FormData();
        // console.log(file.value.files[0]);
        formData.append('file', file.value.files[0])
        store.dispatch('sendVideo', formData);
        // console.log(formData)
        // console.log(file.value.files[0]);
     }

    
</script>

<style scoped>
    form{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>