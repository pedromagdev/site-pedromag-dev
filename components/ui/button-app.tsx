// MyButton.tsx
import {extendVariants, Button} from "@nextui-org/react";

export const ButtonApp = extendVariants(Button, {
  variants: {
    color: {
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff]",
      default: "bg-[#0F2BCD] text-[#fff]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
    },
    variant:{
        bordered: ""
    }
  },
  defaultVariants: { 
    color: "default",
    size: "lg",
    
  },
  compoundVariants: [ // <- modify/add compound variants
    {
      isDisabled: true,
      color: "default",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});