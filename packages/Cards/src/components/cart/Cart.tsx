import "./styled.css";
import type { Product } from "@utils/modelsProduct";
import { useStore } from "projects/StoreProducts";
import { FaTimes } from "react-icons/fa";

export function Cart() {
  const store = useStore((state) => state);

  return (
    <div className="container_listCart">
      {store.listCartSelected.length > 0 &&
        store.listCartSelected.map((value: Product) => (
          <div className="item_cart" key={value.id}>
            <div>
              <p>{value.title}</p>
              <p>R$ {value.price}</p>
            </div>
            <div>
              <button
                onClick={() => store.removeItemCartListSelected(value)}
                className="button_close"
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
