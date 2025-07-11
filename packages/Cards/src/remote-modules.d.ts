declare module "cards/ListCards" {
  import { FC } from "react";
  const ListCards: FC<any>;
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

declare module "projects/StoreProducts" {
  const useStore: (selector: (state: any) => any) => any;
  export { useStore };
}
