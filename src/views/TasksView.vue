<script setup lang="ts">
const tasks: String[] = ['task1'];
</script>

<template>
  <section>
    <h2>Add new Task</h2>
    <form>
      <input type="text" placeholder="Enter a new task..." />
      <button type="submit">+ ADD</button>
    </form>
  </section>

  <section>
    <h2>Your open Tasks <span>({{ tasks.length }})</span></h2>
    <input type="text" placeholder="Search for a task..." />

    <div v-if="tasks.length">
      <div v-for="(task, index) in tasks" :key="index">
        <input type="checkbox">
        <p>{{ task }}</p>
      </div>
    </div>

    <div v-else>
      <p>No tasks available</p>
    </div>
  </section>
</template>
