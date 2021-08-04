import { useEffect, useState } from "react";

export default function useScroll(selector = ".anchor") {
    const [scrollEnd, setScrollEnd] = useState(true);
    useEffect(() => {
      setScrollEnd(true);
    }, []);

    let timer = null;
    let t1= 0;
    let t2= 0;
    const [lastScrollY, saveLastScrollY] = useState(0); // keep the last Y position
    const [number,setNumber] = useState(0); // 0為down,1為up
    
    useEffect(() => {
      const scroll = () => {
        // 上下滾動
        saveLastScrollY(() => {
          const currentScroll = document.querySelector(selector).getBoundingClientRect().top;
          if (currentScroll < lastScrollY) {
            setNumber(0);
          } else {
            setNumber(1);
          }
          if (currentScroll < 0) {
            return currentScroll;
          }
            return 0;
        });

        // 是否停止滑動
        clearTimeout(timer);
        // 1s後執行isScrollEnd
        timer = setTimeout(isScrollEnd, 1000);
        t1 = document.querySelector(selector).getBoundingClientRect().top;
      };

      // 是否停止滑動
      const isScrollEnd = (e) => {
        t2 = document.querySelector(selector).getBoundingClientRect().top;
        if(t2 == t1){
          setScrollEnd(false);
        }  
      }
      
      setScrollEnd(true);
      document.body.addEventListener("scroll", scroll);
      return () => {
        document.body.removeEventListener("scroll", scroll);
      };
    }, [lastScrollY]);
    
  return [scrollEnd,number,lastScrollY];
}
