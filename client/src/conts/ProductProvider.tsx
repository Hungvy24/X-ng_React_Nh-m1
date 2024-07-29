import { createContext, ReactNode, useReducer } from "react";
import reducerPro from "src/reducer/reducerProduct";
import { Product } from "src/types/Product";

interface Props {
  children: ReactNode;
}

export const ProductContext = createContext(
  {} as {
    products: Product[];
    dispathProducts: any;
  }
);
export const ProductProvider = (props: Props) => {
  const [products, dispathProducts] = useReducer(reducerPro, [] as Product[]);
  return (
    <ProductContext.Provider value={{ products, dispathProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};
