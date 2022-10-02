<script setup>
import { onMounted, computed } from "vue";

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

function send(event) {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value
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
        <MaterialInput
          id="name"
          class="input-group-static mb-4"
          type="text"
          :label="{ text: 'Seu nome', class: 'form-label' }"
        />
      </div>
      <div class="col-md-6 ps-md-2">
        <MaterialInput
          id="email"
          class="input-group-static mb-4"
          type="email"
          :label="{ text: 'Seu email', class: 'form-label' }"
        />
      </div>
    </div>

    <div class="form-group mb-0 mt-md-0 mt-4">
      <MaterialTextArea
        id="message"
        class="input-group-static mb-4"
        :rows="6"
        placeholder="Como podemos te ajudar?"
      />
    </div>

    <div class="row">
      <div class="col-md-12 text-center">
        <MaterialButton
          v-if="showCancelBtn"
          data-bs-dismiss="modal"
          variant="gradient"
          type="button"
          color="danger"
          class="mt-3 mx-2 mb-0"
          >Cancelar</MaterialButton
        >
        <MaterialButton
          variant="gradient"
          color="secondary"
          class="mt-3 mx-2 mb-0"
          >Enviar</MaterialButton
        >
      </div>
    </div>
  </form>
</template>