<template>
  <aside class="profile-sidebar portfolio-card">
    <!-- Top Coffee Visual Graphic Backdrop -->
    <div class="sidebar-avatar-container">
      <div class="avatar-coffee-backdrop">
        <img 
          v-if="personalDetails.useImage && personalDetails.image" 
          :src="personalDetails.image" 
          :alt="personalDetails.name" 
          class="avatar-profile-img" 
        />
        <div v-else class="avatar-initials font-mono">{{ personalDetails.badgeText }}</div>
      </div>
    </div>

    <!-- Personal Info -->
    <div class="profile-meta text-center">
      <h2 class="profile-name">{{ personalDetails.name }}</h2>
      <p class="profile-handle">a.k.a <span>{{ personalDetails.handle }}</span></p>

      <!-- Status Pill Badge -->
      <div class="status-pill-box">
        <span class="status-coffee-badge">
          <span class="pulse-dot"></span>
          <span>{{ personalDetails.status }}</span>
        </span>
      </div>

      <p class="profile-short-bio">
        A Software Engineer situated in {{ personalDetails.location }}, crafting digital experiences with passion & practicality.
      </p>
    </div>

    <!-- Contact Action Pills -->
    <div class="contact-pills">
      <a :href="`mailto:${personalDetails.email}`" class="contact-pill-btn primary">
        <IconMail class="w-4 h-4" />
        <span>Contact Me</span>
      </a>
      
      <a 
        :href="personalDetails.socials.linkedin" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="contact-pill-btn secondary"
      >
        <IconLinkedin class="w-4 h-4" />
        <span>LinkedIn</span>
      </a>
    </div>

    <!-- Footer Social Icons (GitHub & LinkedIn ONLY) -->
    <div class="sidebar-socials">
      <a 
        :href="personalDetails.socials.github" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="social-circle-link" 
        title="GitHub"
      >
        <IconGithub class="w-4.5 h-4.5" />
      </a>
      <a 
        :href="personalDetails.socials.linkedin" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="social-circle-link" 
        title="LinkedIn"
      >
        <IconLinkedin class="w-4.5 h-4.5" />
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import IconMail from '~/components/icons/IconMail.vue'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'
import { personalDetails } from '~/data/portfolioData'
</script>

<style scoped>
.profile-sidebar {
  position: sticky;
  top: 90px;
  background: var(--bg-surface);
  border: 1px solid var(--border-dim);
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(44, 36, 32, 0.04);
}

@media (max-width: 992px) {
  .profile-sidebar {
    position: relative;
    top: auto;
    margin-bottom: 2rem;
  }
}

.sidebar-avatar-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
}

.avatar-coffee-backdrop {
  width: 180px;
  height: 200px;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, var(--coffee-dark) 0%, var(--coffee-espresso) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 25px rgba(44, 36, 32, 0.2);
  position: relative;
  overflow: hidden;
}

.avatar-coffee-backdrop::before {
  content: '';
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.25);
}

.avatar-profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.25rem;
  z-index: 2;
}

.avatar-initials {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.05em;
  z-index: 2;
}

.text-center {
  text-align: center;
}

.profile-name {
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--text-main);
  letter-spacing: -0.02em;
  margin-bottom: 0.2rem;
}

.profile-handle {
  font-size: 0.9rem;
  color: var(--text-dim);
  margin-bottom: 1rem;
}

.profile-handle span {
  color: var(--coffee-roast);
  font-weight: 600;
}

.status-pill-box {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.status-coffee-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  background: var(--coffee-cream);
  border: 1px solid var(--border-dim);
  color: var(--coffee-espresso);
  font-size: 0.775rem;
  font-weight: 600;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--coffee-roast);
  display: inline-block;
  box-shadow: 0 0 6px rgba(109, 84, 70, 0.4);
  animation: pulse-coffee 2s infinite;
}

@keyframes pulse-coffee {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.profile-short-bio {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.contact-pills {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
}

.contact-pill-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.contact-pill-btn.primary {
  background: var(--coffee-dark);
  color: #ffffff;
}

.contact-pill-btn.primary:hover {
  background: var(--coffee-roast);
}

.contact-pill-btn.secondary {
  background: var(--bg-surface-subtle);
  border: 1px solid var(--border-dim);
  color: var(--text-main);
}

.contact-pill-btn.secondary:hover {
  border-color: var(--text-main);
}

.sidebar-socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-dim);
  width: 100%;
}

.social-circle-link {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border-dim);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-circle-link:hover {
  color: var(--text-main);
  border-color: var(--text-main);
  background: var(--bg-surface-subtle);
}
</style>
