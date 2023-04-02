import router from "next/router";
import { useEffect } from "react";

export const useRefresh = () => {
  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return refreshData;
};
