<script setup lang="ts">
import { RouterLink } from "vue-router";

const user = {
  name: "Max Mustermann",
  initials: "M. M.",
};
</script>

<template>
  <header>
    <nav class="max-width-container">
      <div class="nav-link-container">
        <RouterLink class="nav-link" to="/">My Tasks</RouterLink>
        <RouterLink class="nav-link" to="/archive">Archive</RouterLink>
      </div>
      <div class="user-container">
        <div class="circle"></div>
        <p>{{ user.name }}</p>
        <!-- <p>M. M.</p> -->
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #f2f2f2;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
}

.nav-link-container {
  display: flex;
  gap: 3rem;
}

.nav-link {
  font-size: 2rem;
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
  gap: 2rem;
  align-items: center;
}

.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
}
</style>
