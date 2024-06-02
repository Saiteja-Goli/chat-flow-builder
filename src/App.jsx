import React, { useState, useCallback } from "react";
import ReactFlow, { addEdge, Background, Controls, MiniMap, useNodesState, useEdgesState } from "reactflow";
import TextNode from "./components/CustomNodes"
import { AiOutlineMessage } from "react-icons/ai";
import { SettingPanel } from "./components/SettingPanel";
import "reactflow/dist/style.css";
import "./App.css";

// Define the custom node types
const nodeTypes = {
  textNode: TextNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;  // Function to generate unique IDs

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [saved, setSaved] = useState(true); 

  // Callback for connecting nodes with edges
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => {
        // Filter out existing edges with the same source and handle
        const existingEdges = eds.filter(
          (edge) =>
            edge.source !== params.source ||
            edge.sourceHandle !== params.sourceHandle
        );
        // Add the new edge
        return addEdge(params, existingEdges);
      });
    },
    [setEdges]
  );

  // Callback for handling drop events to add new nodes
  const onDrop = useCallback((event) => {
    event.preventDefault();
    const reactFlowBounds = event.target.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    if (typeof type === "undefined" || !type) return;

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { text: "" },
    };

    setNodes((nds) => nds.concat(newNode));
  },
    [reactFlowInstance, setNodes]
  );

  // Function to save the flow, checking if all nodes are connected
  const saveFlow = () => {
    const nodesWithNoTargets = nodes.filter(
      (node) => !edges.some((edge) => edge.target === node.id)
    );

    if (nodesWithNoTargets.length > 1) {
      setSaved(false);  // Set saved status to false if there are unconnected nodes
      return;
    } else {
      alert("Saved Successfully");
    }
  };

  return (
    <div>
      <div className="navbar">
        {saved === false ? <button className="cannotSaveChanges">Cannot save Flow</button> : ""}
        <button onClick={saveFlow} className="saveChanges">Save Changes</button>
      </div>
      <div className="dndflow">
        <div
          className="flowArea"
          onDrop={onDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={(event, node) => setSelectedNode(node)}
            onInit={setReactFlowInstance}
            nodeTypes={nodeTypes}
            fitView
          >
            <MiniMap />
            <Controls />
            <Background variant="none" />
          </ReactFlow>
        </div>

        <div className="nodePanel">
          <div
            className="node"
            onDragStart={(event) =>
              event.dataTransfer.setData("application/reactflow", "textNode")
            }
            draggable
          >
            <AiOutlineMessage size={25} color="1178f5" />
            <p className="messageBlock">Message</p>
          </div>
          <SettingPanel
            selectedNode={selectedNode}
            setNodes={setNodes}
            setSelectedNode={setSelectedNode}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
