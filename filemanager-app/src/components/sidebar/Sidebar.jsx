import React, { useState } from "react";
import "./Sidebar.css";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";

const Sidebar = ({data, onSelectFile, onPathSelect, path = [] }) => {

  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
const currentPath = [...path, data.name];

  return (
    <>
      <div className="sidebar">
        <div className="folder-item" onClick={()=>{toggle(); onPathSelect(currentPath);}}>
          {open ? <FaFolderOpen /> : <FaFolder />}
          <span>{data.name}</span>
        </div>

        {
            open && data.files && (
                <ul className="folder-list">
                    {data.files.map((item, index) => (
                    <li>
                        {item.type === "folder" ? ( <Sidebar data={item} onSelectFile={onSelectFile}  onPathSelect={currentPath}/>
                        
                    ) : (
                        <div className="file-item" onClick={() =>{ onSelectFile(item); onPathSelect([...currentPath,item.name]);

                         } }>
                        <FaFile className="file-icon" />
                        {item.name}
                        </div>
                    )}
                    </li>
                   ) )}
                </ul>
            )
        }
      </div>
    </>
  );
};

export default Sidebar;
