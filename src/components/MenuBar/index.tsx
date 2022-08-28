import style from "./MenuBar.module.scss";
import WidgetIcon from "assets/widget.svg";
import AddFile from "assets/add-file.svg";
import AddFolder from "assets/add-folder.svg";

const MenuBar: React.FC = () => {
	return (
		<div className={style.menu_bar}>
			<img src={WidgetIcon} alt="widget icon" />
			<img src={AddFile} alt="add file icon" />
			<img src={AddFolder} alt="add folder icon" />
		</div>
	);
};

export default MenuBar;
