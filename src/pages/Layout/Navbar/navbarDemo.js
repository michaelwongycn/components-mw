import React from "react";
import Navbar from "../../../components/Layout/Navbar/navbar";
import routesConfig from "../../../routes";

const NavbarDemo = () => {
  const menuItems = routesConfig.map((route) => ({
    name: route.name,
    link: `/${route.path}`,
  }));

  return (
    <Navbar brand={{ name: "Navbar Demo", link: "/" }} menuItems={menuItems} />
  );
};

export default NavbarDemo;
