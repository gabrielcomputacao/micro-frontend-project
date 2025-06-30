import { useEffect, useState } from "react";
import "./styled.css";
import { getProducts } from "../../services/getProducts";
import { Card } from "../card/Card";
import { type Product } from "@utils/modelsProduct";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "../cart/Cart";
import { useStore } from "projects/StoreProducts";

export default function ListCards() {
  const [products, setProducts] = useState([]);
  const store = useStore((state) => state);

  async function handleProducts() {
    const data = await getProducts();
    data.products.length > 0 && setProducts(data.products);
  }

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div className="container_card">
      <div className="content_cards">
        {products.map((value: Product) => (
          <Card
            key={`${value.id}-${value.price}`}
            brand={value.brand}
            title={value.title}
            price={value.price}
            product={value}
            img={value.images.length > 0 ? value.images[0] : ""}
          />
        ))}
      </div>
      <div className="container_cart">
        <div className="container_cart__title">
          <FaShoppingCart size={24} color="#fff" />
          <h2>Carrinho</h2>
        </div>
        <Cart />
        <div
          onClick={() => store.addItemListSelected(store.listCartSelected)}
          className="container_button"
        >
          <button>Selecionar Produtos</button>
        </div>
      </div>
    </div>
  );
}
