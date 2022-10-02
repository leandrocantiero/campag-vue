<script setup>
defineProps({
  links: {
    type: Array,
    name: String,
    href: String,
    default: () => [
      { to: "/", name: "Home" },
      { to: "/pages/landing-pages/about-us", name: "Quem somos?" },
      { to: "/pages/landing-pages/contact-us", name: "Contato" },
      { to: "/pages/landing-pages/products", name: "Produtos" },
    ],
  },
});
</script>

<template>
  <footer class="footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-4 mx-auto text-center">
          <router-link
            v-for="{ name, to } of links"
            :key="name"
            :to="to"
            class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
          >
            {{ name }}
          </router-link>
        </div>

        <!-- <div class="col-lg-8 mx-auto text-center mb-4 mt-2">
          <router-link
            v-for="{ icon, link } of socials"
            :key="link"
            :to="link"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
            v-html="icon"
          >
          </router-link>
        </div> -->
      </div>

      <div class="row">
        <div class="col-8 mx-auto text-center mt-1">
          <p class="mb-0 text-secondary">
            Copyright © {{ new Date().getFullYear() }} DataParse.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
