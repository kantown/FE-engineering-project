import create from "zustand";

export interface User {
  username: string;
  email: string;
  isAdmin: boolean;
}

interface UserStore {
  user: User;
  setUser: ({ username, email, isAdmin }: User) => void;
  resetStore: () => void;
}

const initialData = {
  user: {
    username: "",
    email: "",
    isAdmin: false,
  },
};

export const useUserStore = create<UserStore>((set) => ({
  user: { ...initialData.user },
  setUser: ({ username, email, isAdmin }: User) =>
    set({ user: { username, email, isAdmin } }),
  resetStore: () => set(initialData),
}));
