<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import userIconBlue from "@/assets/img/user-icon-blue.png"
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">Nossa equipe</h3>
          <p class="text-white opacity-8 mb-0">
            Confira os membros da nossa equipe.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="userIconBlue"
            :profile="{
              name: 'Claudivelto F. Campagnolo',
              link: 'javascript:;',
            }"
            :position="{
              label: 'Atendente de Folha de Pagamento | Encarregado de Dados',
              color: 'primary',
            }"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="userIconBlue"
            :profile="{ name: 'Cedivaldo Sgrignolli', link: 'javascript:;' }"
            :position="{
              label: 'Sócio | Atendente de Contabilidade',
              color: 'primary',
            }"
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="userIconBlue"
            :profile="{ name: 'Valter Campagnolo', link: 'javascript:;' }"
            :position="{ label: 'Sócio | CEO', color: 'primary' }"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="userIconBlue"
            :profile="{ name: 'Giovana Sgrignolli', link: 'javascript:;' }"
            :position="{
              label: 'Atendente de Licitação',
              color: 'primary',
            }"
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="userIconBlue"
            :profile="{ name: 'Thales Roberto', link: 'javascript:;' }"
            :position="{ label: 'Atendente de Arrecadação', color: 'primary' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
