// // import React from "react";
// // import "../App.css"; 
// // import { Handle, Position } from "reactflow";  
// // import { AiOutlineMessage } from "react-icons/ai";  

// // // Define the TextNode component, which takes 'data' as a prop
// // const TextNode = ({ data }) => {
// //   return (
// //     <div className="textNode">  
// //     {/* Main container for the custom node */}
// //        {/* Inner container for node content */}
// //       <div className="customMain">  
// //          {/* Fixed section for the icon and title */}
// //         <div className="fixedCustom">  
// //            {/* Display the message icon */}
// //           <AiOutlineMessage />  
// //           <p>Send Messages</p>  
// //         </div>
// //          {/* Container for the message text */}
// //         <div className="textMessage">  
// //            {/* Display the message text, or a default message if none is provided */}
// //           <p>{data.text || "Text Message"}</p>  
// //         </div>
// //       </div>
// //        {/* Handle for connecting edges from the right */}
// //       <Handle type="source" position={Position.Right} />  
// //        {/* Handle for connecting edges from the left */}
// //       <Handle type="target" position={Position.Left} />  
// //     </div>
// //   );
// // };

// // export default TextNode;  // Export the TextNode component
// import React from "react";
// import "../App.css";
// import { Handle, Position } from "reactflow";
// import { AiOutlineMessage } from "react-icons/ai";

// const TextNode = ({ data }) => {
//   return (
//     <div className="textNode">
//       <div className="customMain">
//         <div className="fixedCustom">
//           <AiOutlineMessage />
//           <p>Send Messages</p>
//         </div>
//         <div className="textMessage">
//           {!data.hasSourceConnection && <p>{data.text || "Text Message"}</p>}
//         </div>
//       </div>
//       <Handle type="target" position={Position.Left} />
//       {!data.isFirstNode && (
//         <Handle type="source" position={Position.Right} />
//       )}
//       {data.isFirstNode && data.hasSourceConnection && (
//         <Handle type="source" position={Position.Right} />
//       )}
//     </div>
//   );
// };

// export default TextNode;
import React from "react";
import "../App.css";
import { Handle, Position } from "reactflow";
import { AiOutlineMessage } from "react-icons/ai";

const TextNode = ({ data }) => {
  return (
    <div className="textNode">
      <div className="customMain">
        <div className="fixedCustom">

          <div > <AiOutlineMessage /></div>
          <p className="message">Send Messages</p>
        </div>
        <div className="textMessage">
          <p>{data.text || "Text Message"}</p>
        </div>
      </div>
      {data.isFirstNode && (
        <Handle type="source" position={Position.Right} />
      )}
      {!data.isFirstNode && (
        <>
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </>
      )}
    </div>
  );
};

export default TextNode;
