import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

const initialValue =
	"<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const Editor: React.FC = () => {
	const [value, onChange] = useState(initialValue);
	return <RichTextEditor value={value} onChange={onChange} />;
};

export default Editor;
