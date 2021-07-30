/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function useScroll(
  selector = ".anchor",
  option = { threshold: 0 }
) {
 
  // start_是否為頂端
  const [isScroll, setIsScroll] = useState(0); // keep the last Y position
  useEffect(() => {
    const scroll = () => {
      setIsScroll(() => {
        const top = document.querySelector(selector).getBoundingClientRect().top;
          if (top < 0) {
            return 1;
          }

          return 0;
      });
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  // end_是否為頂端

  return isScroll;
}
