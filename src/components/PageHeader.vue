<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="page-header">
    <div class="container">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  color: #fff;
  padding: 60px 0 50px;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.page-header p {
  font-size: 18px;
  color: rgba(255,255,255,0.85);
  margin: 0;
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 0;
  }
  
  .page-header h1 {
    font-size: 32px;
  }
}
</style>
