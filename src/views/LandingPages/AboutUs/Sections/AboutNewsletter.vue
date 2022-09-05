<script setup>
import { onMounted } from "vue";
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="my-5 pt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto">
          <h4>Cadastre-se para receber nossas promoções e novidades</h4>
          <p class="mb-4">
            Seu negócio pode não ser do ramo de software, mas eventualmente, uma
            empresa de software fará parte do seu negócio.
          </p>
          <div class="row">
            <div class="col-8">
              <MaterialInput
                class="input-group-outline"
                id="email"
                :label="{ text: 'Seu email', class: 'form-label' }"
                type="email"
              />
            </div>
            <div class="col-4 ps-0">
              <MaterialButton
                variant="gradient"
                color="secondary"
                class="mb-0 h-100 position-relative z-index-2"
                >Increver-se</MaterialButton
              >
            </div>
          </div>
        </div>
        <div class="col-md-5 ms-auto mt-6 md-mt-0">
          <div class="position-relative">
            <img
              class="max-width-50 w-100 position-relative z-index-2"
              src="@/assets/img/macbook.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
