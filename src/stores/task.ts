import { defineStore } from 'pinia';
import shortid from 'shortid';
import { setDb, getDb } from '@/service/db';
import { getList } from '@/service/getFakeProduct';

export interface Task {
    id?: string;
    name?: string;
    image?: string[];
}

export const useCounterStore = defineStore({
    id: 'task',
    state: () => ({
        message: '' as string,
        list: [] as Task[]
    }),
    getters: {},
    actions: {
        async getListProduct() {
            const { data } = await getList();
            this.list = data;
            console.log(this.list);
        },
        async addTask(message: string) {
            if (message == '') {
                return false;
            }
            const Arr = getDb();
            const Task = { id: shortid(), name: message };

            Arr.push(Task);
            await setDb(Arr);
            this.message = '';
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
        }
    }
});
