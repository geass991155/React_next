import { useEffect, useState } from "react";

export default function useScroll() {
    const [scrollEnd, setScrollEnd] = useState(true);
    useEffect(() => {
      setScrollEnd(true);
    }, []);
  
    // start_滾輪是否移動
    let timer = null;
    let t1= 0;
    let t2= 0;
    useEffect(() => {
      document.onscroll = function() {
        clearTimeout(timer);
        // 1s後執行isScrollEnd
        timer = setTimeout(isScrollEnd, 1000);
        t1 = document.documentElement.scrollTop || document.body.scrollTop;
      }
    }, []);
    const isScrollEnd = (e) => {
      t2 = document.documentElement.scrollTop || document.body.scrollTop;
      if(t2 == t1){
        setScrollEnd(false);
      }  
    }
    // end_滾輪是否移動
  
    // start_上下監聽滾輪事件
    const [lastScrollY, saveLastScrollY] = useState(0); // keep the last Y position
    const [number,setNumber] = useState(0); // 0為down,1為up
  
    const updateScroll = () => {
      // 更新
      const currentScroll = window.pageYOffset; // 現在的Y軸位置
      if (currentScroll > lastScrollY) {
        setNumber(0);
      } else {
        setNumber(1);
      }
      saveLastScrollY(currentScroll > 0 ? currentScroll : 0);
    };
    
    useEffect(() => {
      setScrollEnd(true);
      window.addEventListener("scroll", updateScroll);
      return () => {
        window.removeEventListener("scroll", updateScroll);
      };
    }, [lastScrollY]);
    // end_上下監聽滾輪事件
    
  return [scrollEnd,number,lastScrollY];
}
