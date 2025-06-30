import { create } from "zustand";
import { type Product } from "@utils/modelsProduct";

export const useStore = create((set) => ({
  listSelected: [],
  listCartSelected: [],
  addItemCartListSelected: (item: Product) =>
    set((state: any) => {
      const hasItem = state.listCartSelected.some(
        (value: Product) => value.id === item.id
      );

      if (!hasItem) {
        return {
          ...state,
          listCartSelected: [...state.listCartSelected, item],
        };
      }

      return state;
    }),
  addItemListSelected: (items: Product[]) =>
    set((state: any) => {
      const newProducts = items.filter(
        (product) =>
          !state.listSelected.some((data: Product) => data.id === product.id)
      );

      return {
        ...state,
        listSelected: [...state.listSelected, ...newProducts],
      };
    }),
  removeItemListSelected: (item: Product) =>
    set((state: any) => {
      return {
        ...state,
        listSelected: state.listSelected.filter(
          (value: Product) => value.id !== item.id
        ),
      };
    }),
  removeItemCartListSelected: (item: Product) =>
    set((state: any) => {
      return {
        ...state,
        listCartSelected: state.listCartSelected.filter(
          (value: Product) => value.id !== item.id
        ),
      };
    }),
}));
