<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Usado por</h2>
          <h2 class="text-gradient text-primary mb-3">100+ clientes</h2>
          <p class="lead">
            Nossa gama de clientes inclui prefeituras, câmaras e empresas
            privadas.
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          name="Câmara Municipal de Indiana"
          date="28/09/2022"
          review='"Review do cliente aqui."'
          :rating="5.0"
        />

        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-primary"
          name="Prefeitura Municipal De Narandiba"
          date="30/09/2022"
          review='"Review do cliente aqui."'
          :rating="5.0"
        />

        <DefaultReviewCard
          name="Berrante Agropecuaria E Genetica Ltda."
          date="15/09/2022"
          review='"Review do cliente aqui."'
          :rating="4.0"
        />
      </div>

      <hr class="horizontal dark my-5" />

      <div class="row align-items-center justify-content-between">
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-7"
            style="max-width: 130px"
            src="@/assets/img/logos/logo-berrante.png"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-7"
            style="max-width: 130px"
            src="@/assets/img/logos/logo-narandiba.png"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-7"
            style="max-width: 120px"
            src="@/assets/img/logos/logo-nantes.jpg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-7"
            style="max-width: 120px"
            src="@/assets/img/logos/logo-prudenco.png"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-7"
            style="max-width: 130px"
            src="@/assets/img/logos/logo-caiabu.jpg"
            alt="Logo"
          />
        </div>
        <!-- <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-7"
            style="max-width: 150px"
            src="@/assets/img/logos/logo-fiorilli.png"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-7"
            style="max-width: 130px"
            src="@/assets/img/logos/logo-senior.png"
            alt="Logo"
          />
        </div>
         <div class="col-lg-2 col-md-4 col-6 ms-lg-0 ms-md-auto">
          <img
            class="w-100 opacity-7"
            src="@/assets/img/logos/gray-logos/logo-vodafone.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6 me-md-auto mx-md-0 mx-auto">
          <img
            class="w-100 opacity-7"
            src="@/assets/img/logos/gray-logos/logo-digitalocean.svg"
            alt="Logo"
          />
        </div> -->
      </div>
    </div>
  </section>
</template>
