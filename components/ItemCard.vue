import type { ElCard } from '#build/components';
<template>
  <ElCard
    v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
    class="card"
    shadow="hover"
  >
    <div class="card-content">
      <span class="title">{{ title }}</span>
      <span v-if="copyright">By {{ copyright }}</span>
    </div>
  </ElCard>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  copyright: {
    type: String,
  },
});
</script>

<style scoped>
.card {
  color: #eeeeee;
  height: 20rem;
  width: clamp(200px, 27.5rem, 80dvw);
  background-size: auto;
  background-repeat: no-repeat;
  cursor: pointer;
}
.card-content {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 1.5rem;
}
</style>
