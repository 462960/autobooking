import React, { useState, useEffect, useContext, FC } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../utils/store";
import history from "../utils/history";
import DropDown from "./DropDown";

const DropDownContainer: FC = () => {
  const store = useContext(StoreContext);
  const [chosenService, setChosenService] = useState<string>("");
  const [chosenBrand, setChosenBrand] = useState<string>("");
  const [chosenStyle, setChosenStyle] = useState<string>("");
  const [chosenPath, setChosenPath] = useState<string>("");

  useEffect(() => {
    const servis = chosenService ? `/s-${chosenService}` : "";
    const brand = chosenBrand ? `/b-${chosenBrand}` : "";
    const style = chosenStyle ? `/st-${chosenStyle}` : "";
    const chosen = `${servis}${brand}${style}`;
    if (chosen) {
      setChosenPath(chosen);
      localStorage.setItem("chosen", chosen);
    }
  }, [chosenService, chosenBrand, chosenStyle]);

  useEffect(() => {
    const savedPath = localStorage.getItem("chosen");
    savedPath ? history.push(savedPath) : history.push("/");
  }, []);

  useEffect(() => {
    chosenPath && history.push(chosenPath);
  }, [chosenPath]);

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
