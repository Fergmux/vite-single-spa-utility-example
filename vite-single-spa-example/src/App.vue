<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { publicApiFunction } from "@fergmux/vite-single-spa-utility";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    publicApiFunction();
  },
};
</script>
