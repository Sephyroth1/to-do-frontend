import { Typography } from "@mui/material";
import React from "react";

interface Text {
	text: string;
}

const HistoryItem: React.FC<Text> = ({ text }) => {
	return (
		<Typography variant="h5" component="p">
			{text}
		</Typography>
	);
};

export default HistoryItem;
