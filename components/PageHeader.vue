<template>
  <div>
    <header>
      <h1 class="header" @click="goHome()">Spacey</h1>
    </header>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
.header {
  font-size: 2rem;
  color: #eeeeee;
  margin: 0;
  padding: 1rem;
  cursor: pointer;
}
</style>
