import React, { useState, useEffect, useContext, FC } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../utils/store";
import DropDown from "./DropDown";

interface Props {}

const DropDownContainer: FC<Props> = () => {
  const store = useContext(StoreContext);
  return useObserver(() => (
    <div className="drop-downs-container">
      <ul>
        <li>
          <DropDown label="Services" list={store.servicesList} />
        </li>
        <li>
          <DropDown label="Brands" list={store.brandsList} />
        </li>
        <li>
          <DropDown label="Styles" list={store.stylesList} />
        </li>
      </ul>
    </div>
  ));
};

export default DropDownContainer;
