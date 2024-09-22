import { RiMapPin2Fill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
export const footerContacts = {
    contacts: {
        label: "Entre em contacto",
        links: [
            {
                label: "Luanda, Viana - Jacinto Tchipa",
                icon: <RiMapPin2Fill />,
            },
            {
                label: "+941 452 153 | 951 73 74 17",
                icon: <FaPhoneAlt />
            },
            {
                label: "geral@calugasoft.com",
                icon: <FaEnvelope />

            }
        ],
        iconsSocial: [
            {
                icon: <FaLinkedinIn />,
                href: "https://pedromag.com",
                label: "Linkedin"
            },
            {
                icon: <IoLogoInstagram />,
                href: "https://pedromag.com",
                label: "Linkedin"
            },            {
                icon: <FaFacebookF />,
                href: "https://pedromag.com",
                label: "Facebook"
            }
        ]
    }
}


export const footerMapLinks= {
    label: "Links Populares",
    links: [
        {
            label: "Sobre Nós",
            href: "/about"
        },
        {
            label: "Contactos",
            href: "/contacts"
        },
        {
            label: "Politicas e Privacidades",
            href: "/politics"
        },
        {
            label: "Termos e Uso",
            href: "/terms"
        }
    ]
}