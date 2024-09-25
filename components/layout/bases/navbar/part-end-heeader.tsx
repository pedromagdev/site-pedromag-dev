"use client"
import { ButtonApp } from "@/components/ui/button-app";
import InputSearch from "./input-search";
import { useModal } from "@/hooks";

const PartEnDFooter = () => {
  const {setIsOpen} = useModal()
    return (
        <div className="flex items-center gap-8">
            <InputSearch />
            <div className="">
                <ButtonApp onClick={()=>setIsOpen(true)} size="md">
                    Agendar
                </ButtonApp>
            </div>
        </div>
    )
}

export default PartEnDFooter
