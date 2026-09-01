import "./styles.css";
import { useState } from "react";
import FileTree from "./FileTree";

const initialData = [
  {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      {
        id: 2,
        name: "components",
        type: "folder",
        children: [
          {
            id: 3,
            name: "Button.jsx",
            type: "file",
          },
          {
            id: 4,
            name: "Modal.jsx",
            type: "file",
          },
        ],
      },
      {
        id: 5,
        name: "App.jsx",
        type: "file",
      },
    ],
  },
  {
    id: 6,
    name: "public",
    type: "folder",
    children: [
      {
        id: 7,
        name: "index.html",
        type: "file",
      },
    ],
  },
  {
    id: 8,
    name: "package.json",
    type: "file",
  },
];

export default function App() {
  const [dataTree, setDataTree] = useState(initialData);

  const updateNodes = (nodes, parentId, newNode) => {
    return nodes.map((node) => {
      // 1. Is this the parent?
      if (node.id === parentId) {
        return {
          ...node,
          children: [...node.children, newNode],
        };
      }

      // 2. If not parent, does this node have children?
      if (node.type === "folder" && node.children?.length) {
        return {
          ...node,
          children: updateNodes(node.children, parentId, newNode),
        };
      }

      // 3. Nothing to update
      return node;
    });
  };

  const addNode = (parentId, newNode) => {
    setDataTree((prevTree) => {
      return updateNodes(prevTree, parentId, newNode);
    });
  };

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <FileTree data={dataTree} />

      <button
        onClick={() =>
          addNode(2, {
            id: 10,
            name: "Button.jsx",
            type: "file",
          })
        }
      >
        Add File
      </button>
    </div>
  );
}
