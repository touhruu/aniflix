<template>
  <v-slide-group
    v-model="model"
    class="pa-4"
    selected-class="bg-primary"
    multiple
    show-arrows
  >
    <v-slide-group-item
      v-for="n in 15"
      :key="n"
      v-slot="{ toggle }"
    >
      <v-card
        color="#2b2b2b"
        class="ma-4"
        height="220"
        width="150"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
    import { ref } from 'vue'
    const model = ref([])
</script>
