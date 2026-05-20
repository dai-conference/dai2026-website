<script setup>
import { conferenceInfo, footerData } from '../data/conference.js'

const { name, year, fullName, dates, location } = conferenceInfo
const { links, social } = footerData
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="#" class="footer-logo">{{ name }} {{ year }}</a>
          <p class="footer-tagline">{{ fullName }}</p>
          <p class="footer-location">{{ dates.display }} · {{ location.city }}</p>
          <div class="social-links">
            <a v-for="item in social" :key="item.name" :href="item.href" class="social-link" :title="item.name">
              {{ item.icon }}
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="link-column">
            <h4>Conference</h4>
            <ul>
              <li v-for="link in links.conference" :key="link.label">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="link-column">
            <h4>Authors</h4>
            <ul>
              <li v-for="link in links.authors" :key="link.label">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="link-column">
            <h4>Attendees</h4>
            <ul>
              <li v-for="link in links.attendees" :key="link.label">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="link-column">
            <h4>Info</h4>
            <ul>
              <li v-for="link in links.info" :key="link.label">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ year }} {{ name }} Conference. All rights reserved.</p>
        <p class="credit">Built with care for the AI community</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--primary-dark);
  color: rgba(255,255,255,0.8);
  padding: 64px 0 32px;
}

.footer-content {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 64px;
  margin-bottom: 48px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-logo {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
}

.footer-logo:hover {
  text-decoration: none;
  color: #fff;
}

.footer-tagline {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  line-height: 1.5;
  margin: 0;
}

.footer-location {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  margin: 0;
}

.social-links {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: rgba(255,255,255,0.2);
  text-decoration: none;
  color: #fff;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.link-column h4 {
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-column a {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: #fff;
  text-decoration: none;
}

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-bottom p {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  margin: 0;
}

.credit {
  font-style: italic;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 48px 0 24px;
  }
  
  .footer-links {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
