import { useState } from "react";
import FileTreeNode from "./FileTreeNode";

const FileTree = ({ data }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const handleToggle = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return data.map((node) => (
    <FileTreeNode
      key={node.id}
      node={node}
      expandedIds={expandedIds}
      onToggle={handleToggle}
    />
  ));
};

export default FileTree;
