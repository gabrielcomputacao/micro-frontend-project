import type { Product } from "@utils/modelsProduct";
import "./styled.css";
import { useStore } from "projects/StoreProducts";

interface ICardProps {
  img: string;
  price: number;
  title: string;
  brand: string;
  product: Product;
}

export function Card({ img, price, title, brand, product }: ICardProps) {
  const store = useStore((state) => state);

  function addItemToCart(item: Product) {
    store.addItemCartListSelected(item);
  }

  return (
    <div className="content-card">
      <div className="content-card__img">
        <img src={img} alt="" />
      </div>
      <div className="content-card__text">
        <p>{title}</p>
        <p>{brand}</p>
        <p>{price}</p>
        <button id="addInCart" onClick={() => addItemToCart(product)}>
          Adicionar no carrinho
        </button>
      </div>
    </div>
  );
}
