<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
// material-input
import setMaterialInput from "@/assets/js/material-input";

const props = defineProps({
  email: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  showCancelBtn: {
    type: Boolean,
    default: false,
  },
});

const loading = ref(false);
const toast = useToast();

function send(event) {
  loading.value = true

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  if (!name) {
    toast.error("Preencha um nome")
    loading.value = false
    return 
  }

  if (!email) {
    toast.error("Preencha um email")
    loading.value = false
    return 
  }

  if (!message) {
    toast.error("Preencha uma mensagem")
    loading.value = false
    return 
  }

  setTimeout(() => {
    loading.value = false
    document.getElementById('form').reset()
    toast.success("Mensagem enviada com sucesso!")
  }, getSortedTimout())
}

function getSortedTimout() {
  const randomNumber = Math.random();
  return Math.floor(randomNumber * (5000 - 2000 + 1)) + 2000;
}

onMounted(() => {
  setMaterialInput();

  document.getElementById("message").value = props.message || ""
});
</script>

<template>
  <form id="form" @submit.prevent="send">
    <div class="row">
      <div class="col-md-6">
        <MaterialInput id="name" class="input-group-static mb-4" type="text"
          :label="{ text: 'Seu nome', class: 'form-label' }" />
      </div>
      <div class="col-md-6 ps-md-2">
        <MaterialInput id="email" class="input-group-static mb-4" type="email"
          :label="{ text: 'Seu email', class: 'form-label' }" />
      </div>
    </div>

    <div class="form-group mb-0 mt-md-0 mt-4">
      <MaterialTextArea id="message" class="input-group-static mb-4" :rows="6" placeholder="Como podemos te ajudar?" />
    </div>

    <div class="row">
      <div class="col-md-12 text-center">
        <MaterialButton v-if="showCancelBtn" data-bs-dismiss="modal" variant="gradient" type="button" color="danger"
          class="mt-3 mx-2 mb-0">Cancelar</MaterialButton>
        <MaterialButton variant="gradient" color="secondary" class="mt-3 mx-2 mb-0" :disabled="loading">
          <span v-if="!loading">Enviar</span>
          <span v-else><i class="fas fa-spinner fa-spin"></i></span>
        </MaterialButton>
      </div>
    </div>
  </form>
</template>