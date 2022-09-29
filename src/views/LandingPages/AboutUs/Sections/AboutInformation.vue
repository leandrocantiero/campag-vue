<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";

import image from "@/assets/img/software-1.jpg";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Conversão"
              description="Já tem um sistema implantado e precisa de uma conversão? Sem problemas! Nossa equipe converte qualquer base de dados em até 90 dias."
            />

            <DefaultInfoCard
              icon="flip_to_front"
              title="Integração"
              description="Conte com nossos sistemas integrados para manter sua empresa alinhada e informatizada."
            />
          </div>

          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Economize tempo & dinheiro"
              description="Bons sistemas resolvem problemas e melhoram processos do dia a dia, salve seu tempo e dinheiro com nossas soluções."
            />

            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Atendimento"
              description="Conte com nossa equipe de atendentes receber suporte, seja por Skype, Whatsapp ou telefone, estaremos lá por você."
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            :image="image"
            title="Confira nossos produtos"
            description="Da contabilidade à administração de pessoal, temos todos os sistemas que você precisa!"
          />
        </div>
      </div>
    </div>
  </section>
</template>
