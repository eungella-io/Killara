import FooteBar from "../../components/FooteBar";
import LeftSidePanel from "../../components/LeftSidePanel";
import MenuBar from "../../components/MenuBar";
import RightSidePanel from "../../components/RightSidePanel";
import style from "./NoteApp.module.scss";

const NoteApp: React.FC = () => {
	return (
		<div className={style.note_app}>
			<LeftSidePanel>
				<MenuBar />
			</LeftSidePanel>
			<RightSidePanel>
				<FooteBar />
			</RightSidePanel>
		</div>
	);
};

export default NoteApp;
