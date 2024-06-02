import React from 'react';

// Define the SettingPanel component which takes selectedNode, setNodes, and setSelectedNode as props
export const SettingPanel = ({ selectedNode, setNodes, setSelectedNode }) => {
  return (
    <div className="settingsPanel">
      {selectedNode && (  // Render the settings panel only if a node is selected
        <div>
         {/* Label for the textarea */}
          <label className='label'>Text</label>  
          <textarea
            type="text"
            value={selectedNode.data.text}  // Bind the textarea value to the selected node's text data
            onChange={(event) => {
              // Create a new node object with updated text data
              const newNode = {
                ...selectedNode,
                data: { ...selectedNode.data, text: event.target.value },
              };
              // Update the nodes state with the modified node
              setNodes((nds) =>
                nds.map((node) =>
                  node.id === selectedNode.id ? newNode : node
                )
              );
              // Update the selected node state with the modified node
              setSelectedNode(newNode);
            }}
          />
        </div>
      )}
    </div>
  );
}
