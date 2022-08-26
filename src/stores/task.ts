import { defineStore } from "pinia";
import shortid from "shortid";
import { setDb, getDb } from "@/service/db";

export interface Task {
  id?: string;
  name?: string;
}

export const useCounterStore = defineStore({
  id: "task",
  state: () => ({
    message: "" as string,
    list: getDb() as Task[],
  }),
  getters: {},
  actions: {
    async addTask(message: string) {
      if (message == "") {
        return false;
      }

      const Arr = getDb();
      const Task = { id: shortid(), name: message };

      Arr.push(Task);
      await setDb(Arr);
      this.message = "";

      return this.list.push(Task);
    },
    async deleteTask(id: string) {
      const db = getDb();
      const newDb = db.filter((itemDb: Task) => itemDb.id !== id);

      await setDb(newDb);

      return (this.list = newDb);
    },
    async removeAll() {
      await setDb([]);

      return (this.list = []);
    },
  },
});
