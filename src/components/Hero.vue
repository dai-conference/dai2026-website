<script setup>
import { conferenceInfo } from '../data/conference.js'

const { name, year, fullName, location, dates, description } = conferenceInfo
</script>

<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-pattern"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">{{ name }} {{ year }}</h1>
        <p class="hero-subtitle">{{ fullName }}</p>
        <div class="hero-meta">
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{{ location.city }}</span>
          </div>
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{{ dates.display }}</span>
          </div>
        </div>
        <p class="hero-description">{{ description }}</p>
        <div class="hero-actions">
          <a href="#" class="btn-main">Call for Papers</a>
          <a href="#dates" class="btn-secondary">Important Dates</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background:
    linear-gradient(180deg, rgba(15, 31, 51, 0.75), rgba(15, 31, 51, 0.4)),
    url('/dai/2026/hk.jpg') center/cover fixed no-repeat;
  color: #fff;
  padding: 120px 0 140px;
  overflow: hidden;
  min-height: 680px;
}

.hero-bg,
.hero-pattern {
  display: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-size: 20px;
  color: rgba(255,255,255,0.9);
  margin-bottom: 24px;
  font-weight: 400;
}

.hero-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.85);
  font-size: 15px;
}

.meta-item svg {
  opacity: 0.8;
}

.hero-description {
  font-size: 17px;
  color: rgba(255,255,255,0.75);
  margin-bottom: 32px;
  max-width: 600px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-main {
  background: #fff;
  color: var(--primary-dark);
  padding: 14px 28px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-main:hover {
  background: rgba(255,255,255,0.95);
  text-decoration: none;
  color: var(--primary-dark);
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  padding: 14px 28px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.4);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.6);
  text-decoration: none;
  color: #fff;
}

@media (max-width: 1024px) {
  .hero {
    padding: 60px 0 80px;
  }
  
  .hero-title {
    font-size: 48px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
  
  .hero-meta {
    flex-direction: column;
    gap: 12px;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .btn-main, .btn-secondary {
    text-align: center;
  }
}
</style>
