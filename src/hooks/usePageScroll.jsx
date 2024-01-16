import { useEffect } from "react";
import { sendGAEvent } from "../utils/gaEvents";

const usePageScroll = (location) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolledToBottom =
        Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom) {
        sendGAEvent("page_scrolled", {
          action: `Scrolled through whole page at ${location.pathname}`,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
};

export default usePageScroll;
