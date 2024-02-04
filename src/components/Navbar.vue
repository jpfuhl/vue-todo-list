<template>
  <header>
    <nav class="max-width-container">
      <div class="nav-link-container">
        <RouterLink class="nav-link" to="/">My Tasks</RouterLink>
        <RouterLink class="nav-link" to="/archive">Archive</RouterLink>
      </div>
      <div class="user-container">
        <font-awesome-icon icon="fa-solid fa-user" />
        <p class="user-name">{{ user.name }}</p>
        <p class="user-initials">{{ user.initials }}</p>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const user = {
  name: "Max Mustermann",
  initials: "M. M.",
};
</script>

<style scoped>
header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--black);
  box-shadow: 0 4px 12px 0 rgba(37, 42, 52, 0.5);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
}

.nav-link-container {
  display: flex;
  gap: 1.25rem;
}

.nav-link {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--dark-grey);
  transition: color 0.3s ease-in-out;
}

.nav-link-active {
  color: var(--teal);
}

.user-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: default;
  font-size: 1.25rem;
  color: var(--dark-grey);
  transition: color 0.3s ease-in-out;
}

.user-container:hover {
  color: var(--teal);
}

.user-initials {
  display: block;
}

.user-name {
  display: none;
}

@media (min-width: 425px) {
  .nav-link-container {
    gap: 2.5rem;
  }

  .user-container {
    gap: 1rem;
  }
}

@media (min-width: 640px) {
  .nav-link-container {
    gap: 3.5rem;
  }

  .nav-link {
    font-size: 2rem;
    font-weight: bold;
  }

  .user-initials {
    display: none;
  }
  .user-name {
    display: block;
  }
}
</style>
