<template>
    <div class="content">
        <div class="button-wrapper">
            <p class="title">Сейчас смотрят</p>
            <div class="count-room">Всего комнат: 52</div>
            <button class="add-room" @click="showModal()">Создать комнату</button>
            <v-dialog
                v-model="dialog"
                width="auto"
            >
                <ModalWindow @close="hideModal()"/>
            </v-dialog>
        </div>
        <div class="rooms">
            <RoomCard v-for="room of rooms" :key="room.id" :room="room"/>
        </div>
        <!-- <SwitchStep/> -->
    </div>
    
    
</template>

<script setup>
    import { ref, computed } from 'vue'
    import ModalWindow from '../components/ModalWindow.vue'
    import RoomCard from '../components/RoomCard.vue'
    // import SwitchStep from '../components/SwitchStep.vue'
    import { useStore } from 'vuex';

    const store = useStore();
    
    const dialog = ref(false)
    

    store.dispatch("onGetRooms")
    const rooms = computed(() => store.state.rooms)
    console.log(rooms)


    function showModal(){
        dialog.value = true
        console.log(dialog)
    }

    function hideModal(){
        dialog.value = false
    }

    

</script>

<style scoped lang="scss">

    p{
        color: #bbbbbb;
    }

    .content{
        width: 100%;
        height: 100%;
        padding: 2% 5% 2% 5%;
        color: #bbb;
        display: flex;
        flex-direction: column;
    }

    .button-wrapper{
        display: flex;
        margin-bottom: 20px;

        .title{
            font-size: 28px;
            font-weight: bold;
            margin-right: 10px;
        }
    }

    .count-room{
        background-color: #2b2b2b;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px 6px 12px;
        border-radius: 8px;
        margin-right: 10px;
    }

    .add-room{
        background-color: #2b2b2b;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px 6px 12px;
        border-radius: 8px;
    }

    .rooms{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
        grid-gap: 20px;
    }
</style>