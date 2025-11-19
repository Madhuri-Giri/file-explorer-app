import React from "react";
import './FileView.css';

const FileView = ({ file }) => {
  return (
    <>
      <div className="file-view">
        {!file ? (
          <p className="file-place"> Select a file</p>
        ) : (
          <>
            <h3>{file.name}</h3>
            <pre className="file-content">{file.content}</pre>
            <pre>{file.path}</pre>
          </>
        )}
      </div>
    </>
  );
};

export default FileView;
