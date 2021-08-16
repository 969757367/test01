<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
export default defineComponent({
  name: "App",
  components: { RouterView },
});
</script>

<style>
@import url("./assets/css/base.css");
@import url("./assets/css/animate.css");
</style>
