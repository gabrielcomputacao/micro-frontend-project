// src/remote-modules.d.ts

declare module "cards/ListCards" {
  import { FC } from "react";
  const ListCards: FC<any>; // ou defina as props reais se souber
  export default ListCards;
}

declare module "header/Header" {
  import { FC } from "react";
  const Header: FC<any>;
  export default Header;
}

declare module "footer/Footer" {
  import { FC } from "react";
  const Footer: FC<any>;
  export default Footer;
}
