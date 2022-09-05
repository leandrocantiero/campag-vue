<script setup>
//example components
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/office-1.jpg";

//components
import ContactForm from "./components/ContactForm.vue";
import ContactMap from "./components/ContactMap.vue";
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
            <h1 class="text-white">Entre em contato conosco</h1>
            <p class="lead mb-4 text-white opacity-8">
              um texto simples para descrever objetivos/quem somos
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <ContactForm />
    <ContactMap />
  </div>

  <!-- <div class="col-12">
            <div class="card d-flex blur justify-content-center shadow-lg">
              <div
                class="
                  card-header
                  p-0
                  position-relative
                  mt-n4
                  mx-3
                  z-index-2
                  bg-transparent
                "
              >
                <div
                  class="
                    bg-gradient-primary
                    shadow-primary
                    border-radius-lg
                    p-3
                  "
                >
                  <h3 class="text-white text-primary mb-0">Onde estamos?</h3>
                </div>

                <div class="card-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.278328692938!2d-51.40721378450196!3d-22.11536131567003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f43c0ad85387%3A0xc40e8aa63c80f1f!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Centro%20Medicina!5e0!3m2!1spt-BR!2sbr!4v1662232544982!5m2!1spt-BR!2sbr"
                    width="900"
                    height="600"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div> -->

  <!-- <div class="col-6">
            <div class="card d-flex blur justify-content-center shadow-lg">
              <div
                class="
                  card-header
                  p-0
                  position-relative
                  mt-n4
                  mx-3
                  z-index-2
                  bg-transparent
                "
              >
                <div
                  class="
                    bg-gradient-primary
                    shadow-primary
                    border-radius-lg
                    p-3
                  "
                >
                  <h3 class="text-white text-primary mb-0">Contate-nos</h3>
                </div>
              </div>

              <div class="card-body">
                <p class="pb-3">
                  For further questions, including partnership opportunities,
                  please email hello@creative-tim.com or contact using our
                  contact form.
                </p>
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          label="Nome completo"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="email"
                          label="Email"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="message"
                        class="input-group-static mb-4"
                        :rows="6"
                        >Como podemos te ajudar?</MaterialTextArea
                      >
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          variant="gradient"
                          color="secondary"
                          class="mt-3 mb-0"
                          >Enviar</MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> -->

  <!-- <div class="col-6">
            <div class="card d-flex blur justify-content-center shadow-lg">
              <div
                class="
                  card-header
                  p-0
                  position-relative
                  mt-n4
                  mx-3
                  z-index-2
                  bg-transparent
                "
              >
                <div
                  class="
                    bg-gradient-primary
                    shadow-primary
                    border-radius-lg
                    p-3
                  "
                >
                  <h3 class="text-white text-primary mb-0">Contate-nos</h3>
                </div>
              </div>

              <div class="card-body">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.278328692938!2d-51.40721378450196!3d-22.11536131567003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f43c0ad85387%3A0xc40e8aa63c80f1f!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Centro%20Medicina!5e0!3m2!1spt-BR!2sbr!4v1662232544982!5m2!1spt-BR!2sbr"
                  width="900"
                  height="600"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div> -->

  <DefaultFooter />
</template>
