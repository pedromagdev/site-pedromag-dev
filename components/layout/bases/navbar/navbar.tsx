"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import InputSearch from "./input-search";
import LogoApp from "@/components/global/logo-app";
import PartEnDFooter from "./part-end-heeader";
import { useScrollHeader } from "@/hooks/scroll";
import { useModal } from "@/hooks";

type ProgressbarProps = {
  target: React.RefObject<HTMLElement>;
};
export const Navbar = ({target}:ProgressbarProps) => {

  const {scroll, pathName} = useScrollHeader(target)
  const veryPathName = pathName === "/";
  const {isOpen} = useModal()

  return (
    <NextUINavbar maxWidth="xl" isBlurred={false} className={`z-[5000] fixed ${veryPathName && !scroll ? 'bg-transparent' :'bg-white shadow' }`} >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <LogoApp />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  `${pathName === item.href && 'text-app border-b border-app font-bold'}
                   data-[active=true]:text-primary data-[active=true]:font-medium 
                   hover:border-b text-xs pb-1 
                   hover:text-app hover:font-bold 
                   hover:border-app`,
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {veryPathName && scroll && <PartEnDFooter /> }
          {!veryPathName && <PartEnDFooter /> }
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="z-[5000] ">
        <InputSearch />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                href={item.href}
                color="foreground"
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
