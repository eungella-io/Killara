import { useState } from "react";
import {
	Tree,
	getBackendOptions,
	MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import initialData from "./sample-default.json";
import style from "./FileExplorer.module.scss";
import folderIcon from "assets/folder.svg";

const FileExplorer: React.FC = () => {
	const [treeData, setTreeData] = useState(initialData);
	const handleDrop = (newTreeData: any) => setTreeData(newTreeData);
	return (
		<DndProvider backend={MultiBackend} options={getBackendOptions()}>
			<Tree
				classes={{
					root: style.tree_view,
				}}
				tree={treeData}
				rootId={0}
				onDrop={handleDrop}
				render={(node, { depth, isOpen, onToggle }) => (
					<div style={{ marginLeft: depth * 10 }}>
						{node.droppable && (
							<span onClick={onToggle}>
								{isOpen ? (
									<img alt="folder icon" src={folderIcon} />
								) : (
									<img alt="folder icon" src={folderIcon} />
								)}
							</span>
						)}
						{node.text}
					</div>
				)}
			/>
		</DndProvider>
	);
};

export default FileExplorer;
