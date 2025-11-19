import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import fileData from "./data/FileData";
import { useState } from "react";
import FileView from "./components/file/FileView";
import Toolbar from "./tootbar/Toolbar";

function App() {
  const [fileSystem, setFileSystem] = useState(fileData);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPath, setSelectedPath] = useState([]);

  const handleCreate = (type) => {
    const name = prompt(`Enter ${type} name`);
    if (!name) return;

    const newNode = {
      name,
      type,
      content: type === "file" ? "" : undefined,
      file: type === "folder" ? [] : undefined,
    };

    setFileSystem(addNode(fileSystem, selectedPath, newNode));
  };
  const handleDelete = () => {
    setFileSystem(addNode(fileSystem, selectedPath));
    setSelectedFile(null);
  };
  return (
    <>
      <div className="app-con">
        <Toolbar
          onCreateFile={() => handleCreate("file")}
          onCreateFolder={() => handleCreate("folder")}
          onDelete={handleDelete}
        />

        <div className="main-con">
          <Sidebar
            data={fileData}
            onSelectFile={setSelectedFile}
            onPathSelect={setSelectedPath}
          />
          <FileView file={selectedFile} />
        </div>
      </div>
    </>
  );
}

export default App;
