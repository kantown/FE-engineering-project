import { ReactNode, useEffect, useState } from "react";
import { getUserData } from "services/user-service";
import { useUserStore, User } from "store/userStore";

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setUser, resetStore } = useUserStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { username, email, isAdmin,subs }: User = await getUserData();
        if (username && email) {
          setUser({ username, email, isAdmin, subs });
          setIsLoading(false);
        } else {
          resetStore();
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        resetStore();
      }
    };
    fetchData();
  }, [resetStore, setUser]);
  if (isLoading) {
    return <>Loading</>;
  }
  return <>{children}</>;
};
