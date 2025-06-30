import "../../main.css";
import { useState } from "react";
import { ItemsSelectedModal } from "../itemsSelectedModal/ItemsSelectedModal";

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(true);

  return (
    <header className="w-full h-[80px] bg-white border-b border-b-[#0B6434] p-5 text-[#0B6434] font-sans text-xl font-semibold">
      {isOpenModal && (
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3">
          <ItemsSelectedModal />
        </div>
      )}
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpenModal((prev) => !prev)}
          className="bg-[#0B6434] text-white text-2xl py-2 px-5 rounded-lg cursor-pointer"
          id="items"
        >
          Itens selecionados
        </button>
      </div>
    </header>
  );
}
