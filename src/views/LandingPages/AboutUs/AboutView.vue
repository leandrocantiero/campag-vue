<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import FooterDefault from "../../../examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/office-2.jpg";

//dep
import Typed from "typed.js";

//sections
import AboutInformation from "./Sections/AboutInformation.vue";
import AboutTeam from "./Sections/AboutTeam.vue";
import AboutFeaturing from "./Sections/AboutFeaturing.vue";
import AboutNewsletter from "./Sections/AboutNewsletter.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
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
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Tenha o melhor <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>sotfware</h1>
              <h1>atendimento</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Estamos sempre trabalhando para fornecer aos nossos clientes o
              melhor software com o melhor atendimento.
            </p>
            <h6 class="text-white mb-2 mt-5">Siga-nos</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"
                ><i class="fab fa-facebook text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-instagram text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-twitter text-lg text-white me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-google-plus text-lg text-white"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <AboutInformation />
    <AboutTeam />
    <AboutFeaturing />
    <!-- <AboutNewsletter /> -->
  </div>

  <FooterDefault />
</template>
