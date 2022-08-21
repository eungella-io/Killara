import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

const Editor: React.FC = () => {
	const [value, onChange] = useState("");
	return <RichTextEditor value={value} onChange={onChange} />;
};

export default Editor;
