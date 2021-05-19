/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import isIE from "../utils/isIE";

export default function useScroll(
  selector = ".anchor",
  option = { threshold: 0 }
) {
  const [isScroll, setIsScroll] = useState(0);

  useEffect(() => {
    if (isIE() === false) {
      const observer = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setIsScroll(0);
        } else {
          setIsScroll(1);
        }
      }, option);

      const anchor = document.querySelector(selector);
      // observer.observe(anchor);

      return () => {
        observer.unobserve(anchor);
      };
    } else {
      const scroll = () => {
        setIsScroll(() => {
          const top = document.querySelector(selector).getBoundingClientRect()
            .top;
          if (top < 0) {
            return 1;
          }

          return 0;
        });
      };

      document.body.addEventListener("scroll", scroll);

      return () => document.body.removeEventListener("scroll", scroll);
    }
  }, []);
  
  return isScroll;
}
