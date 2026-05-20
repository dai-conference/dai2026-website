<script setup>
import { announcements, newsItems } from '../data/conference.js'
</script>

<template>
  <section class="news">
    <div class="container">
      <div class="news-layout">
        <!-- Announcements Column -->
        <div class="announcements-section">
          <h2 class="section-title">Latest Announcements</h2>
          <div class="announcements-list">
            <div v-for="item in announcements" :key="item.id" class="announcement-item">
              <div class="announcement-date">{{ item.date }}</div>
              <h3 class="announcement-title">{{ item.title }}</h3>
              <p class="announcement-content">{{ item.content }}</p>
              <a v-if="item.link" :href="item.link.href" class="announcement-link">
                {{ item.link.label }} →
              </a>
            </div>
          </div>
        </div>
        
        <!-- News Column -->
        <div class="news-section">
          <h2 class="section-title">News & Updates</h2>
          <div class="news-list">
            <article v-for="item in newsItems" :key="item.id" class="news-item">
              <div class="news-meta">
                <span class="news-category">{{ item.category }}</span>
                <span class="news-date">{{ item.date }}</span>
              </div>
              <h3 class="news-title">
                <a href="#">{{ item.title }}</a>
              </h3>
              <p class="news-excerpt">{{ item.excerpt }}</p>
            </article>
          </div>
          <a href="#" class="view-all">View all news →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news {
  padding: 80px 0;
  background: var(--bg-light);
  border-top: 1px solid var(--border);
}

.news-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--primary);
  display: inline-block;
}

/* Announcements */
.announcements-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.announcement-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
}

.announcement-item:last-child {
  border-bottom: none;
}

.announcement-date {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.announcement-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 8px;
}

.announcement-content {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 12px;
}

.announcement-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
}

/* News */
.news-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.news-item {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

.news-item:hover {
  border-color: var(--primary-light);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.news-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
}

.news-category {
  font-size: 11px;
  font-weight: 600;
  color: var(--primary);
  background: rgba(30, 58, 95, 0.1);
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.news-date {
  font-size: 13px;
  color: var(--text-muted);
}

.news-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.news-title a {
  color: var(--primary-dark);
  text-decoration: none;
}

.news-title a:hover {
  color: var(--accent);
  text-decoration: none;
}

.news-excerpt {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

.view-all {
  display: inline-block;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
}

@media (max-width: 1024px) {
  .news-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .news {
    padding: 60px 0;
  }
}
</style>
