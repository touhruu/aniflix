<template>
  <div class="card flex justify-content-center">
    <Toast />
    <FileUpload
      style="background-color: #1e1e1e"
      mode="basic"
      accept="image/*"
      :maxFileSize="100000000"
      @select="onSelect"
      @upload="onUpload"
      :auto="true"
      chooseLabel="Загрузить фото"
      ref="file"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useToast } from "primevue/usetoast";

const store = useStore();
const toast = useToast();

const file = ref(null);

const onSelect = () => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });

  let formData = new FormData();
  formData.append("file", file.value.files[0]);
  store.dispatch("addAvatar", formData);
};

const onUpload = () => {

}
</script>

<style>
.p-button {
  border: none;
  border-radius: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
}

.p-button .p-button-icon-left {
    margin-right: 0;
}

.p-component span{
    padding: 10px 10px 10px 10px;
}

.p-button-label{
    display: none;
}

.p-button:focus {
    outline: none;
    outline-offset: none;
    box-shadow: none;
}

.p-component {
  color: #b2b2b2;
}
</style>
