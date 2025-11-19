import React from "react";
import "./Toolbar.css";

const Toolbar = ({ onCreateFile, onCreateFolder, onDelete }) => {
  return (
    <div className="toolbar">
      <button className="btn blue" onClick={onCreateFile}>New File</button>
      <button className="btn gray" onClick={onCreateFolder}>New Folder</button>
      <button className="btn red" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Toolbar;
