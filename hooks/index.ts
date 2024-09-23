import { atom, useAtom } from "jotai"
import { usePathname } from "next/navigation"


export const useVeryPath  =()=>{
    const patthName = usePathname()
    const atomHome = atom(patthName === "/")
    const [homePath, SetHomePath] = useAtom(atomHome)

    
    return {homePath}
}