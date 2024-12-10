import { create } from "zustand";

export const userStore = create((set) => ({
  user: "sandy",
  name: "abas",
  changeUser: () =>
    set((state) => ({
      user:
        state.user === "sandy" ? (state.user = "abas") : (state.user = "sandy"),
    })),
  //   changeUserSandy: () => set({ user: "sandy" }),
}));
