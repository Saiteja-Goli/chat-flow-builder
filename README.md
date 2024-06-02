# BiteSpeed Chatbot Flow Builder

## Introduction

This project creates an intuitive Chatbot flow builder using React and the robust React Flow library (https://reactflow.dev/). It allows users to design complex chatbot conversation flows by visually linking message nodes, setting the stage for incorporating additional node types in the future.

## Project Type

  Frontend

## Deployed App (Placeholder)
[link](https://chat-flow-builder-three.vercel.app/)


## Video Walkthrough

[Video](https://drive.google.com/file/d/1kYtW8FRRbfFhShZMKedi8A-ngxnJqDpL/view?usp=sharing)


## Features

- ### Text Node:
     The initial node type, allowing users to define chatbot messages. Multiple Text Nodes can be incorporated into a single flow.
- ### Extensible Node Panel: 
     Designed to accommodate future node additions, making the Chatbot flow builder versatile.
- ### Edge Connections: 
     Visually represent the conversation flow by connecting nodes with lines.
- ### Source and Target Handles: 
     Maintain connection integrity by ensuring only one outgoing edge originates from a source handle and allowing multiple incoming edges for target handles.
- ### Settings Panel: 
     Contextually replaces the Nodes Panel when a Text Node is selected, offering a text field for editing the message content.
- ### Save Button: 
     Enables users to persist the created chatbot flow. However, the implementation currently prevents saving flows in which all nodes lack target connections (error message displayed).
     
## Installation & Getting Started
### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Saiteja-Goli/chat-flow-builder.git
   ```

2. Navigate to the project folder:

   ```bash
   cd chat-flow-builder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server:

```bash
npm run dev
```
This will launch the development server and open the application in your default web browser, typically at http://localhost:3000.


## Usage

### Create a Chatbot Flow:
Drag and drop Text Nodes from the Nodes Panel onto the canvas.
Connect nodes using the source and target handles to define the conversation flow.
Double-click on a Text Node to open the Settings Panel and edit the message content.
### Save the Flow (Optional):
Click the Save Button when you're satisfied with your flow.
The application currently prevents saving flows with unconnected nodes. Ensure your flow has a well-defined structure before saving.

## Technology Stack
- **React**: A JavaScript library for building user interfaces, developed by Facebook. It allows for the creation of reusable UI components. The front-end of this project is built using React, providing a dynamic and interactive user experience.

<b>React Flow: </b> Library providing drag-and-drop functionality for creating the flow builder interface.


--- 