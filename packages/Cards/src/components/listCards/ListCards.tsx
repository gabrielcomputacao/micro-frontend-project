import { useEffect, useState } from "react";
import "./styled.css";
import { getProducts } from "../../services/getProducts";

export default function ListCards() {
  const [products, setProducts] = useState([]);

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
        {products.map((value: any) => (
          <div>{value.price}</div>
        ))}
      </div>
    </div>
  );
}
