import create from "zustand";

export interface User {
  username: string;
  email: string;
  isAdmin: boolean;
  subs?: {
    name: string;
    price: number;
    period: "week" | "twoWeeks" | "month" | "threeMonths" | "sixMonths" | "year";
    lastPayment: string;
  }[];
}

interface UserStore {
  user: User;
  setUser: ({ username, email, isAdmin, subs }: User) => void;
  resetStore: () => void;
}

const initialData = {
  user: {
    username: "",
    email: "",
    isAdmin: false,
    subs: [],
  },
};

export const useUserStore = create<UserStore>((set) => ({
  user: { ...initialData.user },
  setUser: ({ username, email, isAdmin, subs }: User) =>
    set({ user: { username, email, isAdmin, subs } }),
  resetStore: () => set(initialData),
}));
