import { HiMiniHomeModern } from "react-icons/hi2";
import { BsCoin } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

export const services = [
    {
        name: "Venda de Casas",
        description: "Compre casas acabadas ou inacabadas, oferecendo opções que atendem a diferentes perfis e necessidades dos nossos clientes.",
        icon: <HiMiniHomeModern />
    },
    {
        name: "Pagamentos por parcelas",
        description: "Oferecemos a opção de pagamento em parcelas mensais. Entendemos que cada cliente tem sua realidade financeira, por isso disponibilizamos condições flexíveis.",
        icon: <GiTwoCoins />
    },
    {
        name: "Construções confiavéis",
        description: "A Pedromag, garante construções de casas confiáveis, com foco na qualidade, segurança e durabilidade. Trabalhamos com uma equipe de profissionais experientes e parceiros renomados.",
        icon: <IoSettings />
    }
]