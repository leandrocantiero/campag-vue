<script setup>
// example component
import DefaultCounterCard from "../../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>
<template>
  <section class="pt-4 pb-6" id="count-stats">
    <div class="container">
      <div class="row mb-7 align-items-center justify-content-between">
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img
            class="w-100 opacity-7"
            style="max-width: 250px"
            src="@/assets/img/logos/logo-fiorilli.png"
            alt="logo"
          />
        </div>

        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img
            class="w-100 opacity-7"
            style="max-width: 130px"
            src="@/assets/img/logos/logo-senior.png"
            alt="logo"
          />
        </div>

        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img
            class="w-100 opacity-7"
            style="max-width: 130px"
            src="@/assets/img/logos/logo-wk.png"
            alt="logo"
          />
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-md-4 position-relative">
          <DefaultCounterCard
            color="primary"
            title="Sistemas disponíveis"
            description="Da contabilidade à administração de pessoal, temos todos os sistemas que você precisa!"
            :count="20"
            suffix="+"
            :duration="3000"
            divider="vertical"
          />
        </div>
        <div class="col-md-4 position-relative">
          <DefaultCounterCard
            color="primary"
            title="Sistemas instalados"
            description="Nossa gama de clientes inclui prefeituras, câmaras e empresas privadas"
            :count="100"
            suffix="+"
            :duration="3000"
            divider="vertical"
          />
        </div>
        <div class="col-md-4">
          <DefaultCounterCard
            color="primary"
            title="Anos de mercado"
            description="Venha fazer parte dessa história de sucesso!"
            :count="25"
            suffix="+"
            :duration="3000"
          />
        </div>
      </div>
    </div>
  </section>
</template>
