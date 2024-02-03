import type { Task } from "@/types/task";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: <Task[]>[],
    searchValue: "",
  }),
  getters: {
    getUncompletedTasks(): Task[] {
      return this.tasks.filter((task) => !task.completed).reverse();
    },
    getCompletedTasks(): Task[] {
      return this.tasks.filter((task) => task.completed).reverse();
    },
    getTaskBySearch(): Task[] {
      return this.tasks.filter((task) =>
        task.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
  actions: {
    async fetchTasks(n: number = 200) {
      try {
        console.log("fetching tasks");
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        this.tasks = data.slice(0, n);
      } catch (error) {
        console.error(error);
      }
    },
    addTask(title: string) {
      const maxId = Math.max(...this.tasks.map((task) => task.id));
      console.log(maxId + 1);
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
