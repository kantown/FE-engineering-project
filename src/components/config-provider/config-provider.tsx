import { ReactNode, useEffect, useState } from "react";
import { getUserData } from "../../services/user-service";
import { useUserStore } from "../../store/userStore";
import { User } from "../../store/userStore";
interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setUser, resetStore } = useUserStore();
  useEffect(() => {
    const fetchData = async () => {
      const { username, email }: User = await getUserData();
      if (username && email) {
        console.log("POMOCY", username, email);
        setUser({ username, email });
        setIsLoading(false);
      } else {
        resetStore();
        setIsLoading(false);
      }
    };
    fetchData();
  }, [resetStore, setUser]);
  if (isLoading) {
    return <>Loading</>;
  }
  return <>{children}</>;
};
