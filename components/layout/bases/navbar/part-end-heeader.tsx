"use client"
import { ButtonApp } from "@/components/ui/button-app";
import { BsClockHistory } from "react-icons/bs";
import InputSearch from "./input-search";

const PartEnDFooter = () => {

    return (
        <div className="flex items-center gap-8">
            <InputSearch />
            <div className="">
                <ButtonApp size="md">
                    Agendar
                </ButtonApp>
            </div>
        </div>
    )
}

export default PartEnDFooter
