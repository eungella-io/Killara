import Editor from "../../components/Editor";
import FileExplorer from "../../components/FileExplorer";
import FooteBar from "../../components/FooterBar";
import LeftSidePanel from "../../components/LeftSidePanel";
import MenuBar from "../../components/MenuBar";
import RightSidePanel from "../../components/RightSidePanel";
import style from "./NoteApp.module.scss";

const NoteApp: React.FC = () => {
	return (
		<div className={style.note_app}>
			<LeftSidePanel menubar={<MenuBar />} fileexplorer={<FileExplorer />} />

			<RightSidePanel editor={<Editor />} footerbar={<FooteBar />} />
		</div>
	);
};

export default NoteApp;
