import type { TTask } from "@/types/task";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: <TTask[]>[],
    searchValue: "",
  }),
  getters: {
    getUncompletedTasks(): TTask[] {
      if (this.searchValue) {
        return this.tasks
          .filter(
            (task) =>
              task.title
                .toLowerCase()
                .includes(this.searchValue.toLowerCase()) && !task.completed
          )
          .reverse();
      }
      return this.tasks.filter((task) => !task.completed).reverse();
    },
    getCompletedTasks(): TTask[] {
      if (this.searchValue) {
        return this.tasks
          .filter(
            (task) =>
              task.title
                .toLowerCase()
                .includes(this.searchValue.toLowerCase()) && task.completed
          )
          .reverse();
      }
      return this.tasks.filter((task) => task.completed).reverse();
    },
  },
  actions: {
    async fetchTasks(n: number = 200) {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        this.tasks = data.slice(0, n);
      } catch (error) {
        console.error(`Error while fetching tasks from API: ${error}`);
      }
    },
    addTask(title: string) {
      const maxId = Math.max(...this.tasks.map((task) => task.id));
      this.tasks.push({
        id: maxId + 1,
        userId: 1,
        title,
        completed: false,
      });
    },
    changeTaskStatus(taskId: number) {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1)
        this.tasks[index].completed = !this.tasks[index].completed;
    },
  },
});
