"use client"

import {
  Button,
  Divider,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuItems = (
    <>
      <NavbarItem>
        <Link
          color="foreground"
          href="https://dotku.us/marketing"
          isExternal
          showAnchorIcon
        >
          Marketing
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/tech">
          Technologies
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          color="foreground"
          href="https://dkwholesale.us"
          isExternal
          showAnchorIcon
        >
          E-commerce
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/business">
          Business
        </Link>
      </NavbarItem>
    </>
  );

  return (
    <Navbar className="pb-3 p-5 border-bottom" maxWidth="2xl">
      <NavbarBrand>
        <a
          href="/"
          className="align-items-center text-body-emphasis text-decoration-none d-inline inline-block"
          title="Elevate Your Tech Business with the power of media and technologies"
        >
          <Image
            src="/assets/images/jytech-logo.png"
            alt="Jytech logo"
            width={40}
          />
        </a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MenuItems}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/contact-us"
            variant="bordered"
          >
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden">
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarMenu>
          {MenuItems}
          <Divider className="my-3"/>
          <NavbarMenuItem>
            <Button
              as={Link}
              color="primary"
              href="/contact-us"
              variant="bordered"
            >
              Contact us
            </Button>
          </NavbarMenuItem>
          </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
