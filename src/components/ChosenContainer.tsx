import React, { useState, useEffect } from "react";

import DropDown from "./DropDown";

interface Props {
  parse: any;
}

const ChosenContainer: React.FC<Props> = ({ parse }) => {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    let res: any = [];

    if (parse !== undefined) {
      let keys = Object.keys(parse);
      keys?.forEach((x, i) => {
        let type = {
          ...parse[x],
          id: i,
          slug: parse[x].slug || "",
        };
        res.push(type);
      });
    }
    setList(res);
  }, [parse]);

  return (
    <div className="chosen-container">
      <DropDown label="Your choice" list={list} />
    </div>
  );
};

export default ChosenContainer;
