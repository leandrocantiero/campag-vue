<script setup>
import MaterialBadge from "@/components/MaterialBadge.vue";
</script>

<template>
  <section class="pt-5">
    <div class="container">
      <div class="row">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <MaterialBadge color="secondary" class="mb-3"
              >Presidente Prudente</MaterialBadge
            >

            <h2 class="text-dark mb-0">Onde estamos?</h2>
            <p class="lead">
              Agende uma visita através do formulário e venha conhecer nossa
              empresa, ou nos ligue através do telefone: (18) 3221-3546
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="iframe-container">
      <iframe
        class="responsive-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.278328692938!2d-51.40721378450196!3d-22.11536131567003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f43c0ad85387%3A0xc40e8aa63c80f1f!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Centro%20Medicina!5e0!3m2!1spt-BR!2sbr!4v1662232544982!5m2!1spt-BR!2sbr"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 40%; /* 16:9 Aspect Ratio (divide 9 by 16 = 56.25%) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>