import { useStore } from "projects/StoreProducts";
import type { Product } from "@utils/modelsProduct";

export function ItemsSelectedModal() {
  const store = useStore((state) => state);

  return (
    <div className="bg-white w-[500px] h-[400px] border rounded-lg p-5">
      <div className="w-full text-center text-2xl">
        <h2>Itens Selecionados</h2>
      </div>
      <div className="flex flex-col gap-4 items-center">
        {store.listSelected.length > 0 &&
          store.listSelected.map((value: Product) => (
            <div key={`${value.id}-${value.description}`}>
              <div>
                <p>{value.title}</p>
                <p>R$ {value.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
