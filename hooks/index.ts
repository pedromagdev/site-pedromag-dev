import { atom, useAtom } from "jotai"
import { usePathname } from "next/navigation"
import { atomModalAppointment } from "./atoms"


export const useVeryPath  =()=>{
    const patthName = usePathname()
    const atomHome = atom(patthName === "/")
    const [homePath, SetHomePath] = useAtom(atomHome)

    
    return {homePath}
}


export function useModal(){
    const [isOpen, setIsOpen] = useAtom(atomModalAppointment)

    return {isOpen, setIsOpen}
}