"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "Dashboard", "Activity"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit">RF GROUP</p>
        </NavbarBrand>
      </NavbarContent>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="settings">Sobre Nosotros</DropdownItem>
          <DropdownItem key="team_settings">Unidades de negocio</DropdownItem>
          <DropdownItem key="analytics">Petroleo & gas</DropdownItem>
          <DropdownItem key="system">Metalurgica</DropdownItem>
          <DropdownItem key="configurations">Hotel Crystal</DropdownItem>
          <DropdownItem key="help_and_feedback">Hotel Iberia</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Contacto
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
}
