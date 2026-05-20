<script setup>
import PageHeader from '../components/PageHeader.vue'
import { committees } from '../data/conference.js'
</script>

<template>
  <div class="page">
    <PageHeader title="Conference Committee" subtitle="DAI 2026 Organizing Team" />

    <div class="container">
      <div class="committee-grid">
        <!-- Left Column -->
        <div class="committee-column">
          <!-- General Chairs -->
          <section class="committee-section">
            <h2 class="section-title">General Chairs</h2>
            <ul class="member-list">
              <li v-for="chair in committees.generalChairs" :key="chair.name">
                <a v-if="chair.link" :href="chair.link" target="_blank" class="member-link">{{ chair.name }}</a>
                <span v-else class="member-name">{{ chair.name }}</span>
                <span class="member-affiliation">{{ chair.affiliation }}</span>
              </li>
            </ul>
          </section>

          <!-- Program Chairs -->
          <section class="committee-section">
            <h2 class="section-title">Program Chairs</h2>
            <ul class="member-list">
              <li v-for="chair in committees.programChairs" :key="chair.name">
                <a v-if="chair.link" :href="chair.link" target="_blank" class="member-link">{{ chair.name }}</a>
                <span v-else class="member-name">{{ chair.name }}</span>
                <span class="member-affiliation">{{ chair.affiliation }}</span>
              </li>
            </ul>
          </section>

          <!-- AI Paper Track Chairs -->
          <section class="committee-section">
            <h2 class="section-title">AI Paper Track Chairs</h2>
            <ul class="member-list">
              <li v-for="chair in committees.aiPaperTrackChairs" :key="chair.name">
                <a v-if="chair.link" :href="chair.link" target="_blank" class="member-link">{{ chair.name }}</a>
                <span v-else class="member-name">{{ chair.name }}</span>
                <span class="member-affiliation">{{ chair.affiliation }}</span>
              </li>
            </ul>
          </section>

          <!-- Local Organizing Chairs -->
          <section class="committee-section">
            <h2 class="section-title">Local Organizing Chairs</h2>
            <ul class="member-list">
              <li v-for="chair in committees.localChairs" :key="chair.name">
                <a v-if="chair.link" :href="chair.link" target="_blank" class="member-link">{{ chair.name }}</a>
                <span v-else class="member-name">{{ chair.name }}</span>
                <span class="member-affiliation">{{ chair.affiliation }}</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Column -->
        <div class="committee-column">
          <!-- Workshop/Tutorial Chairs -->
          <section class="committee-section">
            <h2 class="section-title">Workshop/Tutorial Chairs</h2>
            <ul class="member-list">
              <li v-for="chair in committees.workshopTutorialChairs" :key="chair.name">
                <a v-if="chair.link" :href="chair.link" target="_blank" class="member-link">{{ chair.name }}</a>
                <span v-else class="member-name">{{ chair.name }}</span>
                <span class="member-affiliation">{{ chair.affiliation }}</span>
              </li>
            </ul>
          </section>

          <!-- Publicity Chairs -->
          <section class="committee-section">
            <h2 class="section-title">Publicity Chairs</h2>
            <ul class="member-list">
              <li v-for="chair in committees.publicityChairs" :key="chair.name">
                <a v-if="chair.link" :href="chair.link" target="_blank" class="member-link">{{ chair.name }}</a>
                <span v-else class="member-name">{{ chair.name }}</span>
                <span class="member-affiliation">{{ chair.affiliation }}</span>
              </li>
            </ul>
          </section>

          <!-- Web/Publication Co-Chairs -->
          <section class="committee-section">
            <h2 class="section-title">Web/Publication Co-Chairs</h2>
            <ul class="member-list">
              <li v-for="chair in committees.webPublicationChairs" :key="chair.name">
                <a v-if="chair.link" :href="chair.link" target="_blank" class="member-link">{{ chair.name }}</a>
                <span v-else class="member-name">{{ chair.name }}</span>
                <span class="member-affiliation">{{ chair.affiliation }}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding-bottom: 60px;
}

.committee-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 40px;
}

.committee-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.committee-section {
  break-inside: avoid;
}

.section-title {
  font-size: 30px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-light, #e5e7eb);
}

.member-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.member-list li {
  margin-bottom: 12px;
  line-height: 1.5;
}

.member-name,
.member-link {
  font-size: 20px;
  font-weight: 500;
  color: var(--text-dark);
}

.member-link {
  text-decoration: none;
  color: var(--primary);
}

.member-link:hover {
  text-decoration: underline;
}

.member-affiliation {
  color: var(--text-light);
  font-size: 16px;
  display: block;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .committee-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
