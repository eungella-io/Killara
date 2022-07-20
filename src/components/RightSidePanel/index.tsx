import { ReactElement } from "react";
import style from "./RightSidePanel.module.scss";

interface RightSidePanelProps {
	editor: ReactElement;
	footerbar: ReactElement;
}

const RightSidePanel: React.FC<RightSidePanelProps> = ({
	editor,
	footerbar,
}) => {
	return (
		<div className={style.right_side_panel}>
			{editor}
			{footerbar}
		</div>
	);
};

export default RightSidePanel;
