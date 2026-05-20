<script setup>
import { importantDates } from '../data/conference.js'
</script>

<template>
  <section id="dates" class="key-dates">
    <div class="container">
      <h2 class="section-title">Important Dates</h2>
      <p class="section-subtitle">All deadlines are 23:59 Anywhere on Earth (AoE)</p>
      
      <div class="dates-grid">
        <div 
          v-for="(item, index) in importantDates" 
          :key="item.id"
          class="date-card"
          :class="item.status"
        >
          <div class="date-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="date-content">
            <h3 class="date-event">{{ item.event }}</h3>
            <div class="date-info">
              <span class="date-value">{{ item.date }}</span>
              <span class="date-time">{{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.key-dates {
  padding: 80px 0;
  background: var(--bg);
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 8px;
}

.section-subtitle {
  text-align: center;
  color: var(--text-muted);
  font-size: 15px;
  margin-bottom: 48px;
}

.dates-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.date-card {
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.date-card:hover {
  border-color: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.date-card.highlight {
  background: var(--primary);
  border-color: var(--primary);
}

.date-card.highlight .date-number {
  color: rgba(255,255,255,0.3);
}

.date-card.highlight .date-event {
  color: #fff;
}

.date-card.highlight .date-value {
  color: rgba(255,255,255,0.95);
}

.date-card.highlight .date-time {
  color: rgba(255,255,255,0.7);
}

.date-number {
  font-size: 48px;
  font-weight: 700;
  color: var(--border);
  line-height: 1;
  margin-bottom: 16px;
}

.date-event {
  font-size: 15px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 12px;
  line-height: 1.4;
}

.date-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.date-value {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
}

.date-time {
  font-size: 13px;
  color: var(--text-muted);
}

@media (max-width: 1200px) {
  .dates-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .key-dates {
    padding: 60px 0;
  }
  
  .dates-grid {
    grid-template-columns: 1fr;
  }
  
  .date-card {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  
  .date-number {
    font-size: 32px;
    margin-bottom: 0;
    min-width: 50px;
  }
}
</style>
