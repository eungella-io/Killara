import { ReactElement } from "react";
import style from "./RightSidePanel.module.scss";

interface RightSidePanelProps {
	children: ReactElement;
}

const RightSidePanel: React.FC<RightSidePanelProps> = ({ children }) => {
	return (
		<div className={style.right_side_panel}>
			<div>Right Side Panel</div>
			{children}
		</div>
	);
};

export default RightSidePanel;
