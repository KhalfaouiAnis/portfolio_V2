import { useEffect, RefObject } from "react";

const useOnScroll = (handler: () => void) => {
  useEffect(() => {
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, [handler]);
};

export default useOnScroll;
