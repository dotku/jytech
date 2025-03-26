"use client";

import {
  Button,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuItems = [
    {
      label: "Marketing",
      href: "https://dotku.us/marketing",
      isExternal: true,
    },
    {
      label: "Technologies",
      href: "/tech",
    },
    {
      label: "E-commerce",
      href: "https://dkwholesale.us",
      isExternal: true,
    },
    {
      label: "Business",
      href: "/business",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-40 bg-white p-4 sm:p-5"
      maxWidth="2xl"
    >
      {/* Mobile Layout */}
      <NavbarContent
        className="sm:hidden w-full flex justify-between"
        justify="end"
      >
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center"
            title="Elevate Your Tech Business with the power of media and technologies"
          >
            <Image
              src="/assets/images/jytech-logo.png"
              alt="JY Tech logo"
              width={40}
              height={40}
              priority
            />
          </Link>
        </NavbarBrand>

        <Button
          isIconOnly
          variant="light"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="p-0 min-w-8 w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoClose className="w-5 h-5" />
          ) : (
            <IoMenu className="w-5 h-5" />
          )}
        </Button>
      </NavbarContent>

      {/* Desktop Layout */}
      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center"
            title="Elevate Your Tech Business with the power of media and technologies"
          >
            <Image
              src="/assets/images/jytech-logo.png"
              alt="JY Tech logo"
              width={40}
              height={40}
              priority
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={isActive(item.href)}>
            <Link
              color={isActive(item.href) ? "primary" : "foreground"}
              href={item.href}
              isExternal={item.isExternal}
              showAnchorIcon={item.isExternal}
              className={`text-sm transition-colors duration-200 ${
                isActive(item.href) ? "font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/contact-us"
            variant="bordered"
            className="text-sm"
          >
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6 pb-6 sm:hidden w-full" data-id="navbar-menu">
        <div
          className="fixed inset-0 bg-black/10 -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="max-w-md mx-auto w-full">
          <div className="bg-white rounded-xl shadow-lg p-6">
            {menuItems.map((item) => (
              <NavbarMenuItem key={item.href}>
                <Link
                  color={isActive(item.href) ? "primary" : "foreground"}
                  href={item.href}
                  isExternal={item.isExternal}
                  showAnchorIcon={item.isExternal}
                  size="lg"
                  className={`w-full py-3 transition-colors duration-200 ${
                    isActive(item.href) ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
            <Divider className="my-4" />
            <NavbarMenuItem>
              <Button
                as={Link}
                color="primary"
                href="/contact-us"
                variant="solid"
                className="w-full"
                size="lg"
              >
                Contact us
              </Button>
            </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
