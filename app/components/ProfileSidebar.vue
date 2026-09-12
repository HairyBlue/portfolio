<template>
  <aside class="profile-sidebar">
    <!-- Top Coffee Visual Graphic Backdrop -->
    <div class="sidebar-avatar-container">
      <div class="avatar-backdrop">
        <img 
          v-if="personalDetails.useImage && personalDetails.image" 
          :src="personalDetails.image" 
          :alt="`${personalDetails.name} (${personalDetails.handle})`" 
          class="avatar-profile-img" 
          tabindex="0"
        />
        <div v-else class="avatar-initials font-headline">{{ personalDetails.badgeText }}</div>
      </div>
      <p class="avatar-caption font-mono">
        <em>Fig. 1: {{ personalDetails.name }}, Software Engineer.</em>
      </p>
    </div>

    <!-- Personal Info -->
    <div class="profile-meta text-center">
      <h2 class="profile-name font-heading">{{ personalDetails.name }}</h2>
      <p class="profile-handle font-mono">@<span>{{ personalDetails.handle }}</span></p>

      <!-- Status Text -->
      <div class="status-box">
        <span class="status-text font-mono">STATUS: {{ personalDetails.status.toUpperCase() }}</span>
      </div>

      <p class="profile-short-bio">
        A Software Engineer situated in {{ personalDetails.location }}, crafting digital experiences with passion & practicality.
      </p>
    </div>

    <!-- Contact Action Pills -->
    <div class="contact-actions">
      <a :href="`mailto:${personalDetails.email}`" class="btn-primary">
        <span>Contact Me</span>
      </a>
    </div>

    <!-- Footer Social Icons -->
    <div class="sidebar-socials">
      <a 
        :href="personalDetails.socials.github" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="social-link font-mono" 
        title="GitHub"
      >
        GITHUB
      </a>
      <span class="separator">|</span>
      <a 
        :href="personalDetails.socials.linkedin" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="social-link font-mono" 
        title="LinkedIn"
      >
        LINKEDIN
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { personalDetails } from '~/data/portfolioData'
</script>

<style scoped>
.profile-sidebar {
  position: sticky;
  top: 90px;
  background: var(--bg-surface);
  border: 1px solid var(--border-dim);
  border-top: 3px solid var(--border-strong);
  border-radius: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: none;
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
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
}

.avatar-caption {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-top: 0.5rem;
  text-align: center;
}

.avatar-backdrop {
  width: 100%;
  max-width: 200px;
  aspect-ratio: 4/5;
  border: 1px solid var(--border-strong);
  border-radius: 0;
  background: var(--bg-page);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: none;
}

.avatar-profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  filter: grayscale(85%) sepia(20%) contrast(105%) brightness(98%);
  transform: scale(1);
  transition: filter 0.4s ease, transform 0.4s ease;
  will-change: filter, transform;
}

.avatar-backdrop:hover .avatar-profile-img,
.avatar-profile-img:hover,
.avatar-profile-img:focus-visible {
  filter: grayscale(0%) sepia(0%) contrast(100%) brightness(100%);
  transform: scale(1.02);
}

.avatar-profile-img:focus-visible {
  outline: 2px solid var(--accent-ink);
  outline-offset: -2px;
}

.avatar-initials {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--text-main);
  letter-spacing: -0.05em;
}

.text-center {
  text-align: center;
}

.profile-name {
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--text-main);
  letter-spacing: -0.02em;
  margin-bottom: 0.2rem;
}

.profile-handle {
  font-size: 0.85rem;
  color: var(--text-dim);
  margin-bottom: 1rem;
}

.status-box {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  border-top: 1px solid var(--border-dim);
  border-bottom: 1px solid var(--border-dim);
  padding: 0.5rem 0;
}

.status-text {
  color: var(--accent-ink);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.profile-short-bio {
  font-size: 1rem;
  font-family: var(--font-body);
  color: var(--text-main);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.contact-actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.btn-primary {
  width: 100%;
  justify-content: center;
}

.sidebar-socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-strong);
  width: 100%;
}

.social-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
}

.social-link:hover {
  color: var(--text-main);
}

.separator {
  color: var(--border-dim);
  font-size: 0.75rem;
}
</style>
