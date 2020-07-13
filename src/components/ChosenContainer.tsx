import React, { useState, useEffect } from "react";

import DropDown from "./DropDown";

interface Props {
  parsed: any;
}

const ChosenContainer: React.FC<Props> = ({ parsed }) => {
  const [list, setList] = useState<any>([]);
  const isListPopulated = list?.length > 0;
  useEffect(() => {
    let res: any = [];

    if (parsed !== undefined) {
      let keys = Object.keys(parsed);
      // Each DropDown item should have both id and slug
      // that's why empty object must be populated
      keys?.forEach((x, i) => {
        let item = {
          ...parsed[x],
          id: i,
          slug: parsed[x].slug || "",
        };
        res.push(item);
      });
    }
    setList(res);
  }, [parsed]);

  return (
    <div className="chosen-container">
      <DropDown
        label={isListPopulated ? "Your choice" : "Select items"}
        list={list}
      />
    </div>
  );
};

export default ChosenContainer;
