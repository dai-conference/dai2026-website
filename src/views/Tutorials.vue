<script setup>
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <div class="page">
    <PageHeader title="Tutorials" subtitle="DAI 2026" />
    
    <div class="container">
      <div class="coming-soon">
        <div class="coming-soon-icon">📚</div>
        <h2>Coming Soon</h2>
        <p>Tutorials information will be announced shortly. Please check back later.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
}

.coming-soon {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
}

.coming-soon-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.coming-soon h2 {
  font-size: 32px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 16px;
}

.coming-soon p {
  font-size: 16px;
  color: var(--text-light);
  line-height: 1.6;
}
</style>
