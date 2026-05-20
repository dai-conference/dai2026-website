<script setup>
import { sponsors } from '../data/conference.js'

const { tiers, list } = sponsors
</script>

<template>
  <section id="sponsors" class="sponsors">
    <div class="container">
      <h2 class="section-title">Sponsors</h2>
      <p class="section-subtitle">We thank our sponsors for their generous support</p>
      
      <!-- Platinum -->
      <div class="sponsor-tier">
        <h3 class="tier-title" :style="{ color: tiers.platinum.color }">{{ tiers.platinum.name }}</h3>
        <div class="sponsors-grid platinum-grid">
          <div v-for="sponsor in list.platinum" :key="sponsor.name" class="sponsor-card platinum-card">
            <div class="sponsor-logo">{{ sponsor.logo }}</div>
            <span class="sponsor-name">{{ sponsor.name }}</span>
          </div>
        </div>
      </div>
      
      <!-- Gold -->
      <div class="sponsor-tier">
        <h3 class="tier-title" :style="{ color: tiers.gold.color }">{{ tiers.gold.name }}</h3>
        <div class="sponsors-grid gold-grid">
          <div v-for="sponsor in list.gold" :key="sponsor.name" class="sponsor-card gold-card">
            <div class="sponsor-logo">{{ sponsor.logo }}</div>
            <span class="sponsor-name">{{ sponsor.name }}</span>
          </div>
        </div>
      </div>
      
      <!-- Silver -->
      <div class="sponsor-tier">
        <h3 class="tier-title" :style="{ color: tiers.silver.color }">{{ tiers.silver.name }}</h3>
        <div class="sponsors-grid silver-grid">
          <div v-for="sponsor in list.silver" :key="sponsor.name" class="sponsor-card silver-card">
            <div class="sponsor-logo">{{ sponsor.logo }}</div>
            <span class="sponsor-name">{{ sponsor.name }}</span>
          </div>
        </div>
      </div>
      
      <div class="sponsor-cta">
        <p>Interested in sponsoring DAI 2026?</p>
        <a href="#" class="btn-sponsor">View Sponsorship Opportunities</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sponsors {
  padding: 80px 0;
  background: var(--bg);
  border-top: 1px solid var(--border);
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
  font-size: 16px;
  margin-bottom: 48px;
}

.sponsor-tier {
  margin-bottom: 48px;
}

.tier-title {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.sponsors-grid {
  display: grid;
  gap: 20px;
}

.platinum-grid {
  grid-template-columns: repeat(3, 1fr);
}

.gold-grid {
  grid-template-columns: repeat(4, 1fr);
}

.silver-grid {
  grid-template-columns: repeat(6, 1fr);
}

.sponsor-card {
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.2s ease;
}

.sponsor-card:hover {
  border-color: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.platinum-card {
  padding: 40px 24px;
}

.platinum-card .sponsor-logo {
  font-size: 28px;
}

.gold-card .sponsor-logo {
  font-size: 22px;
}

.silver-card {
  padding: 16px;
}

.silver-card .sponsor-logo {
  font-size: 16px;
}

.sponsor-logo {
  font-weight: 700;
  color: var(--primary);
  opacity: 0.8;
}

.sponsor-name {
  font-size: 13px;
  color: var(--text-light);
  text-align: center;
}

.sponsor-cta {
  text-align: center;
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid var(--border);
}

.sponsor-cta p {
  color: var(--text-muted);
  margin-bottom: 16px;
}

.btn-sponsor {
  display: inline-block;
  padding: 12px 24px;
  background: var(--primary);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.btn-sponsor:hover {
  background: var(--primary-dark);
  text-decoration: none;
  color: #fff;
}

@media (max-width: 1200px) {
  .silver-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .platinum-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gold-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .sponsors {
    padding: 60px 0;
  }
  
  .platinum-grid,
  .gold-grid,
  .silver-grid {
    grid-template-columns: 1fr;
  }
  
  .sponsor-card {
    flex-direction: row;
    justify-content: flex-start;
    padding: 16px 20px;
  }
  
  .platinum-card {
    padding: 20px;
  }
}
</style>
