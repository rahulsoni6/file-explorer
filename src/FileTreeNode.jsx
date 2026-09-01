const FileTreeNode = ({ node, expandedIds, onToggle }) => {
  const isExpanded = expandedIds.includes(node.id);

  return (
    <div>
      <div
        onClick={() => onToggle(node.id)}
        style={{ background: node.type === "folder" ? "red" : "green" }}
      >
        {node.name} -- {node.id}
      </div>
      {node.type === "folder" && isExpanded
        ? node.children.length > 0
          ? node.children.map((nestedNode) => (
              <FileTreeNode
                key={nestedNode.id}
                node={nestedNode}
                expandedIds={expandedIds}
                onToggle={onToggle}
              />
            ))
          : null
        : null}
    </div>
  );
};

export default FileTreeNode;
