import React from "react";
import "../App.css"; // Import the CSS file for styling
import { Handle, Position } from "reactflow"; // Import Handle and Position from reactflow
import { AiOutlineMessage } from "react-icons/ai"; // Import the message icon from react-icons

// Define the TextNode component, which takes 'data' as a prop
const TextNode = ({ data }) => {
  return (
    <div className="textNode">  {/* Main container for the custom node */}
      <div className="customMain">  {/* Inner container for node content */}
        <div className="fixedCustom">  {/* Fixed section for the icon and title */}
          <div> {/* Container for the message icon */}
            <AiOutlineMessage /> {/* Display the message icon */}
          </div>
          <p className="message">Send Messages</p> {/* Display the title "Send Messages" */}
        </div>
        <div className="textMessage">  {/* Container for the message text */}
          <p>{data.text || "Text Message"}</p> {/* Display the message text, or a default message if none is provided */}
        </div>
      </div>
      {data.isFirstNode && (  
        // {/* Check if the node is the first node */}
        // {/* Handle for connecting edges from the right if it's the first node */}
        <Handle type="source" position={Position.Right} />  
      )}
      {!data.isFirstNode && (  
        // {/* If the node is not the first node */}
        <>
          <Handle type="target" position={Position.Left} />  {/* Handle for connecting edges from the left */}
          <Handle type="source" position={Position.Right} />  {/* Handle for connecting edges from the right */}
        </>
      )}
    </div>
  );
};

export default TextNode; // Export the TextNode component
