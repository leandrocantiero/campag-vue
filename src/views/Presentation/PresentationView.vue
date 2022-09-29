<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import FooterDefault from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import newyork from "@/assets/img/newyork-1.jpg";
import nastuh from "@/assets/img/nastuh.jpg";
import dg1 from "@/assets/img/dg1.jpg";

import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];

const images = [newyork, nastuh, dg1];
const titles = [
  "Bem-vindo a Campag Informática",
  "SCPI - Sistema de Contabilidade Pública Integrado",
  "SIP - Sistema Integrado de Pessoal",
];
const subtitles = [
  "Descubra a empresa que está no mercado a mais de 25 anos fornecendo o melhor serviço para seus clientes.",
  "Só quem é líder pode oferecer tantas vantagens em um único sistema. Conheça os módulos do nosso sistema de contabilidade pública.",
  "Um software completo para o gerenciamento da Folha de Pagamentos e do setor de RH.",
];

onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" transparent />
      </div>
    </div>
  </div>

  <header class="bg-gradient-dark">
    <Carousel :autoplay="4500">
      <Slide v-for="(image, index) in images" :key="image">
        <div
          class="carousel__item page-header min-vh-75"
          :style="{
            backgroundImage: `url(${image})`,
            width: '100%',
          }"
        >
          <span class="mask bg-gradient-dark opacity-6"></span>

          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center mx-auto my-auto">
                <h1 class="text-white">
                  {{ titles[index] }}
                </h1>
                <p class="lead mb-4 text-white opacity-8">
                  {{ subtitles[index] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>

    <!-- <div
      class="page-header min-vh-75"
       }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">Bem-vindo a Campag Informática</h1>
            <p class="lead mb-4 text-white opacity-8">
              um texto simples para descrever objetivos/quem somos
            </p>
          </div>
        </div>
      </div>
    </div> -->
  </header>

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationTestimonials />

    <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
      }"
    >
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${wavesWhite})`,
        }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">
                  Precisa informatizar seu negócio com sistemas de ponta?
                </h3>
                <p class="text-white text-md">
                  Fornecemos os melhores sistemas disponíveis no mercado. <br />
                  Tudo para que sua empresa obtenha o melhor desempenho e e transforme isso em uma vantagem competitiva.
                </p>

                <RouterLink
                  to="/pages/landing-pages/contact-us"
                  class="btn btn-sm mb-0 bg-gradient-primary px-5 py-3 mt-4"
                >
                  Entrar em contato
                </RouterLink>

                <!-- <a
                  href="https://www.creative-tim.com/product/vue-material-kit"
                  class="btn btn-sm mb-0 bg-gradient-primary px-5 py-3 mt-4"
                  >Entrar em contato</a
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Obrigado por nos visitar!</h4>
            <p class="lead mb-0">Siga-nos nas rede sociais</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
              component="twitter"
              color="twitter"
              label="Tweet"
            />
            <MaterialSocialButton
              route="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-design-system-pro"
              component="facebook-square"
              color="facebook"
              label="Share"
            />
            <MaterialSocialButton
              route=""
              component="pinterest"
              color="pinterest"
              label="Pin it"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterDefault />
</template>
