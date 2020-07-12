import React, { useState, useEffect, useContext, FC } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../utils/store";
import DropDown from "./DropDown";

const DropDownContainer: FC = () => {
  const store = useContext(StoreContext);
  const [chosenService, setChosenService] = useState<any>("");
  const [chosenBrand, setChosenBrand] = useState<any>("");
  const [chosenStyle, setChosenStyle] = useState<any>("");

  useEffect(() => {
    const servis = chosenService ? `/s-${chosenService}` : "";
    const brand = chosenBrand ? `/b-${chosenBrand}` : "";
    const style = chosenStyle ? `/st-${chosenStyle}` : "";
    const chosen = `${servis}${brand}${style}`;
    chosen && localStorage.setItem("chosen", chosen);
  }, [chosenService, chosenBrand, chosenStyle]);

  //   useEffect(() => {
  //     store.updatePath();
  //   }, []);

  return useObserver(() => (
    <div className="drop-downs-container">
      <ul>
        <li>
          <DropDown
            label="Services"
            list={store.servicesList}
            getChosen={setChosenService}
          />
        </li>
        <li>
          <DropDown
            label="Brands"
            list={store.brandsList}
            getChosen={setChosenBrand}
          />
        </li>
        <li>
          <DropDown
            label="Styles"
            list={store.stylesList}
            getChosen={setChosenStyle}
          />
        </li>
      </ul>
    </div>
  ));
};

export default DropDownContainer;
