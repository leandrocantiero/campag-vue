<script setup>
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import CenteredFooter from "@/examples/footers/FooterCentered.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

defineProps({
  breadcrumb: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <DefaultNavbar light />

  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-12 mx-auto">
        <div class="mb-4 w-150 w-md-110 w-lg-40">
          <Breadcrumbs :routes="breadcrumb" />

          <h3>{{ title }}</h3>
        </div>

        <slot />
      </div>
    </div>
  </div>

  <CenteredFooter />
</template>
