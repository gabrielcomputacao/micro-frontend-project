import "../../main.css";

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-white border-b border-b-[#0B6434] p-5 text-[#0B6434] font-sans text-xl font-semibold">
      <div className="flex justify-center">
        <button className="" id="items">
          Itens selecionados
        </button>
      </div>
    </header>
  );
}
