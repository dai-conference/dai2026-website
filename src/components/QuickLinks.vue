<script setup>
import { quickLinks } from '../data/conference.js'

// 将对象转换为数组便于遍历
const linkSections = Object.values(quickLinks)
</script>

<template>
  <section class="quick-links">
    <div class="container">
      <h2 class="section-title">Quick Links</h2>
      <div class="links-grid">
        <div v-for="section in linkSections" :key="section.title" class="link-section">
          <h3 class="section-heading">{{ section.title }}</h3>
          <ul class="link-list">
            <li v-for="link in section.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quick-links {
  padding: 48px 0;
  background: var(--bg-light);
  border-bottom: 1px solid var(--border);
}

.section-title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 32px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

.link-section {
  text-align: center;
}

.section-heading {
  font-size: 15px;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.link-list li {
  display: inline-block;
}

.link-list a {
  display: inline-block;
  padding: 6px 14px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  transition: all 0.2s ease;
}

.link-list a:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  text-decoration: none;
}

@media (max-width: 1024px) {
  .links-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .links-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .link-section {
    text-align: left;
  }
  
  .link-list {
    justify-content: flex-start;
  }
}
</style>
