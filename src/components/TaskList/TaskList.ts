import { useCounterStore } from "@/stores/task";

export default {
  setup() {
    const counter = useCounterStore();

    return { counter };
  },
};
