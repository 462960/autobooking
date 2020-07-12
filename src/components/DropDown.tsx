import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

interface Props {
  label: string;
  list: any;
}

const DropDown: FC<Props> = ({ label, list }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleToggle = (e: React.ChangeEvent<{}>, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (e: React.ChangeEvent<{}>, nodeIds: string[]) => {
    setSelected(nodeIds);
    console.log(`output: ${nodeIds}`);
  };

  const handleClick = (e: any) => {
    // console.log(e.currentTarget.slug);
  };

  const itemsList = list.length > 0 ? list : [];

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      <TreeItem nodeId="1" label={label} onClick={handleClick}>
        {itemsList.map((x: { id: any; label: any; slug: any }) => {
          return <TreeItem key={x.id} label={x.label} nodeId={x.slug} />;
        })}
        {/* <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" /> */}
      </TreeItem>
    </TreeView>
  );
};

export default DropDown;