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
});

const name = computed({
  get() {
    return props.name;
  },
  set(value) {
    emit("send:name", value);
  },
});
const email = computed({
  get() {
    return props.email;
  },
  set(value) {
    emit("send:email", value);
  },
});
const message = computed({
  get() {
    return props.message;
  },
  set(value) {
    emit("send:message", value);
  },
});

const emit = defineEmits(["send:name", "send:email", "send:message", "send"]);

function send(e) {
  emit("send");
}

onMounted(() => {
  setMaterialInput();
});
</script>

<template>
  <section class="pt-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="row justify-content-center">
            <div class="card blur justify-content-center shadow-lg">
              <div
                class="
                  card-header
                  p-0
                  position-relative
                  mt-n4
                  mx-3
                  z-index-2
                  bg-transparent
                "
              >
                <div
                  class="
                    bg-gradient-primary
                    shadow-primary
                    border-radius-lg
                    p-3
                  "
                >
                  <h3 class="text-white text-primary mb-0">Contate-nos</h3>
                </div>
              </div>

              <div class="card-body">
                <!-- <p class="pb-3">
                  For further questions, including partnership opportunities,
                  please email hello@creative-tim.com or contact using our
                  contact form.
                </p> -->
                <div class="card-body p-0 my-3">
                  <form id="form" @submit.prevent="send">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          v-model="name"
                          :label="{ text: 'Seu nome', class: 'form-label' }"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="email"
                          v-model="email"
                          :label="{ text: 'Seu email', class: 'form-label' }"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="message"
                        class="input-group-static mb-4"
                        :rows="6"
                        v-model="message"
                        placeholder="Como podemos te ajudar?"
                      />
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          variant="gradient"
                          color="secondary"
                          class="mt-3 mb-0"
                          >Enviar</MaterialButton
                        >
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>