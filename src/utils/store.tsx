import React, { createContext, FC } from "react";
import { useLocalStore } from "mobx-react";
import * as API from "./api";

export const StoreContext = createContext<any>(null);

type Props = {
  children: JSX.Element | null;
};

interface Store {
  servicesList: object[];
  brandsList: object[];
  stylesList: object[];
  parseList: object | undefined;
  getServices: () => void;
  getBrands: () => void;
  getStyles: () => void;
  getParse: (x?: string, y?: string, z?: string) => void;
}

export const StoreProvider: FC<Props> = ({ children }) => {
  const store = useLocalStore<Store>(() => ({
    servicesList: [],
    brandsList: [],
    stylesList: [],
    parseList: undefined,
    getServices: async () => {
      const res = await API.services();
      store.servicesList = res;
    },
    getBrands: async () => {
      const res = await API.brands();
      store.brandsList = res;
    },
    getStyles: async () => {
      const res = await API.styles();
      store.stylesList = res;
    },
    getParse: async (service, brand, style) => {
      const res = await API.parse(service, brand, style);
      store.parseList = res;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
