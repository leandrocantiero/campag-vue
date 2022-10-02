<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
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
      </div>
    </div>
  </section>
</template>
