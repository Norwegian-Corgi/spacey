<template>
  <div>
    <el-space class="main" :size="30" wrap>
      <ItemCard
        v-for="apod in data?.reverse()"
        :key="apod.date"
        :image="apod.url"
        :title="apod.title"
        :copyright="apod.copyright"
        @click="goTo(apod.date)"
      />
    </el-space>
  </div>
</template>

<script setup lang="ts">
import type { Apod } from "../models";

const runtimeConfig = useRuntimeConfig();

const { data } = useFetch<Array<Apod>>(
  `https://api.nasa.gov/planetary/apod?api_key=${runtimeConfig.public.apiKey}&start_date=2024-01-20`
);

const goTo = (date: string) => {
  const router = useRouter();
  router.push(`/${date}`);
};
</script>

<style scoped>
.main {
  margin-top: 2rem;
  width: 100dvw;
  display: flex;
  justify-content: center;
}
</style>
