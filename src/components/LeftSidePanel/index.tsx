import { ReactElement } from "react";
import style from "./LeftSidePanel.module.scss";

interface NoteAppProps {
	menubar: ReactElement;
	fileexplorer: ReactElement;
}

const LeftSidePanel: React.FC<NoteAppProps> = ({ menubar, fileexplorer }) => {
	return (
		<div className={style.left_side_panel}>
			{menubar}
			{fileexplorer}
		</div>
	);
};

export default LeftSidePanel;
