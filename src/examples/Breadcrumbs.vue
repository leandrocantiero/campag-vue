<script setup>
defineProps({
  routes: {
    type: Array,
    required: true,
    route: String,
    label: String,
    default: () => [
      {
        route: "/",
        label: "",
      },
    ],
  },
});
</script>
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="({ route, label }, index) of routes"
        :key="index"
        class="breadcrumb-item"
      >
        <router-link v-if="index != routes.length - 1" :to="route">{{ label }}</router-link>
        <template v-else>{{ label }}</template>
      </li>
    </ol>
  </nav>
</template>
