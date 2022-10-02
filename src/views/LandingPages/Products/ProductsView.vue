<script setup>
//example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/office-dark.jpg";

//sections
import PresentationExample from "../../Presentation/Sections/PresentationExample.vue";
import data from "../../Presentation/Sections/Data/designBlocksData";
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" transparent />
      </div>
    </div>
  </div>

  <!-- <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">Produtos</h1>
            <p class="lead mb-4 text-white opacity-8">
              Veja nosso catálogo de produtos e encontre o melhor sistema para sua empresa
            </p>
          </div>
        </div>
      </div>
    </div>
  </header> -->

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <PresentationExample :data="data" />
  </div>
</template>