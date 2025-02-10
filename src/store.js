import { create } from "zustand";

const useMyStore = create(() => {
  return {
    count: 1,
    savatcha: [],
    like:[],

    setSavatcha: (callback) =>
      set((state) => ({ savatcha: callback(state.savatcha) })),
  };
});
export default useMyStore;
