import { ReactElement } from "react";
import style from "./LeftSidePanel.module.scss";

interface NoteAppProps {
	children: ReactElement;
}

const LeftSidePanel: React.FC<NoteAppProps> = ({ children }) => {
	return (
		<div className={style.left_side_panel}>
			{children}
			<div>Left Side Panel</div>
		</div>
	);
};

export default LeftSidePanel;
