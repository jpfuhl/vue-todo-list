<template>
  <header>
    <nav class="max-width-container">
      <div class="nav-link-container">
        <RouterLink class="nav-link" to="/">My Tasks</RouterLink>
        <RouterLink class="nav-link" to="/archive">Archive</RouterLink>
      </div>
      <div class="user-container">
        <font-awesome-icon icon="fa-solid fa-user" class="icon" />
        <p class="user-name">{{ user.name }}</p>
        <p class="user-initials">M. M.</p>
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
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
}

.nav-link-container {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: rgb(0, 0, 0, 0.5);
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: blue;
}

.nav-link-active {
  color: blue;
}

.user-container {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon {
  font-size: 1.25rem;
  color: rgb(0, 0, 0, 0.5);
  transition: color 0.3s ease-in-out;
}

.icon:hover {
  color: blue;
}

p {
  cursor: default;
  font-size: 1.25rem;
  color: rgb(0, 0, 0, 0.5);
}

.user-initials {
  display: block;
}

.user-name {
  display: none;
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
