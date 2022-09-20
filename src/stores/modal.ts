import { defineStore } from 'pinia';

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        showModal: false as boolean
    }),
    actions: {
        showHideModal(params: boolean) {
            this.showModal = params;
        }
    }
});
