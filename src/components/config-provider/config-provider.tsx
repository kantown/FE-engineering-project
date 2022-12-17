import { ReactNode, useEffect, useState } from "react";
import { getUserData } from "../../services/user-service";
import { useUserStore } from "../../store/userStore";
import { User } from "../../store/userStore";
interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();
  useEffect(() => {
    const fetchData = async () => {
      const { username, email }: User = await getUserData();
      if (username && email) {
        setUser({ username, email });
      }
    };
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, [setUser]);
  if (isLoading) {
    return <>Loading</>;
  } else {
    return <>{children}</>;
  }
};
