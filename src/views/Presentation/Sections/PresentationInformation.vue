<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>

<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4 mb-3">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Hora de transformar seu negócio"
              description="Tenha acesso a sistemas de ponta, capazes de transformar seu negócio!"
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Veja como"
              description="Confira nosso portifolio e escolha o sistema ideal para sua empresa!"
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Ver sistemas',
                },
              ]"
            />
          </RotatingCard>
        </div>

        <div class="col-lg-6 ms-auto">
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

          <div class="row justify-content-start mt-5">
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
      </div>
    </div>
  </section>
</template>
