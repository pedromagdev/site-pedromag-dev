import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useScrollHeader(target: React.RefObject<HTMLElement>){

    const [scroll, setScroll] = useState(false);
    const pathName = usePathname()
    

    const scrollListener = useCallback(() => {
      if (!target.current) {
        return;
      }
     
      const windowScrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
  
      if (windowScrollTop === 0) {
        return setScroll(false);
      }
  
      if (windowScrollTop > 30) {
        return setScroll(true);
      }
  
    }, [target]);
  
    useEffect(() => {
      window.addEventListener("scroll", scrollListener);
  
      return () => window.removeEventListener("scroll", scrollListener);
    }, [scrollListener]);

    return {scroll,pathName}
}
