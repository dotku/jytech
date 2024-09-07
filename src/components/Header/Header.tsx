import { Button, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className="pb-3 p-5 border-bottom" maxWidth="2xl">
      <NavbarBrand>
      <a
        href="/"
        className="align-items-center text-body-emphasis text-decoration-none d-inline inline-block"
        title="Elevate Your Tech Business with the power of media and technologies"
      >
        <Image src="/assets/images/jytech-logo.png" alt="Jytech logo" width={40}/>
      </a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="https://dotku.us/marketing" isExternal showAnchorIcon>
            Marketing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/tech">
            Technologies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://dkwholesale.us" isExternal showAnchorIcon>
            E-commerce
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/business">
            Business
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/contact-us" variant="bordered">
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
