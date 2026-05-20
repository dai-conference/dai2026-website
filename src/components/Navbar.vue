<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { conferenceInfo, navItems } from '../data/conference.js'

const activeDropdown = ref(null)

const toggleDropdown = (index, event) => {
  event.preventDefault()
  event.stopPropagation()
  activeDropdown.value = activeDropdown.value === index ? null : index
}

const closeDropdowns = () => {
  activeDropdown.value = null
}

const handleClickOutside = (event) => {
  const navbar = document.querySelector('.navbar')
  if (navbar && !navbar.contains(event.target)) {
    closeDropdowns()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <RouterLink to="/" class="logo">
          {{ conferenceInfo.name }} {{ conferenceInfo.year }}
        </RouterLink>
        
        <ul class="nav-links">
          <li 
            v-for="(item, index) in navItems" 
            :key="item.label"
            :class="{ 'dropdown': item.type === 'dropdown', 'active': activeDropdown === index }"
          >
            <template v-if="item.type === 'link'">
              <RouterLink :to="item.href">{{ item.label }}</RouterLink>
            </template>
            <template v-else-if="item.type === 'dropdown'">
              <a 
                href="#" 
                class="dropdown-toggle"
                @click="toggleDropdown(index, $event)"
              >
                {{ item.label }}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                  <path d="M1 1l4 4 4-4"/>
                </svg>
              </a>
              <ul v-show="activeDropdown === index" class="dropdown-menu">
                <li v-for="child in item.children" :key="child.label">
                  <RouterLink :to="child.href" @click="closeDropdowns">
                    {{ child.label }}
                  </RouterLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
        
        <a href="#" class="btn-primary">Submit Paper</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: var(--primary-dark);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  text-decoration: none;
}

.logo:hover {
  text-decoration: none;
  color: #fff;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 4px;
  margin: 0;
  padding: 0;
}

.nav-links > li {
  position: relative;
}

.nav-links > li > a,
.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255,255,255,0.85);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
}

.nav-links > li > a:hover,
.dropdown-toggle:hover {
  color: #fff;
  background: rgba(255,255,255,0.1);
}

.dropdown-toggle svg {
  opacity: 0.7;
  transition: transform 0.2s ease;
}

.dropdown.active .dropdown-toggle svg {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  padding: 8px 0;
  margin-top: 8px;
  list-style: none;
  z-index: 101;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 20px;
  width: 12px;
  height: 12px;
  background: #fff;
  transform: rotate(45deg);
}

.dropdown-menu li a {
  display: block;
  padding: 10px 20px;
  color: var(--text);
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.dropdown-menu li a:hover {
  background: var(--bg-light);
  color: var(--accent);
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: var(--accent-hover);
  text-decoration: none;
  color: #fff;
}

@media (max-width: 1200px) {
  .nav-links {
    display: none;
  }
}
</style>
