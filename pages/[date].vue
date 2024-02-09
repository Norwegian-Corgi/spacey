<template>
  <div
    v-bind:style="{ backgroundImage: 'url(' + data?.hdurl + ')' }"
    class="container"
  >
    <div class="p-2">
      <div class="title">{{ data?.title }}</div>
      <div v-if="data?.copyright">By {{ data.copyright }}</div>
      <div class="mt-2">{{ data?.explanation }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Apod } from "../models";

const runtimeConfig = useRuntimeConfig();
const date = useRoute().params.date;

const { data } = useFetch<Apod>(
  `https://api.nasa.gov/planetary/apod?api_key=${runtimeConfig.public.apiKey}&date=${date}`
);
</script>

<style scoped>
.container {
  height: calc(100dvh - 4rem);
  background-repeat: no-repeat;
  background-size: auto;
  color: #eeeeee;
}
.p-2 {
  padding: 2rem;
}
.title {
  font-size: 3rem;
}
.mt-2 {
  margin-top: 2rem;
}
</style>
