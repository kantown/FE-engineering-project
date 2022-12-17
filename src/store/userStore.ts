import create from "zustand";

export interface User {
  username: string;
  email: string;
}

interface UserStore {
  user: User;
  setUser: ({ username, email }: User) => void;
  resetStore: () => void;
}

const initialData = {
  user: {
    username: "",
    email: "",
  },
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    username: "",
    email: "",
  },
  setUser: ({ username, email }: User) => set({ user: { username, email } }),
  resetStore: () => set(initialData),
}));
