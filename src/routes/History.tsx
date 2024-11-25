import "./History.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography, AppBar } from "@mui/material";
import HistoryItem from "./HistoryItems";

interface Historyitem {
	id: number;
	name: string;
}

interface HistoryItems {
	tasks: Historyitem[];
}

const History: React.FC<HistoryItems> = ({ tasks }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					m: 1,
					width: 256,
					height: 256,
				},
			}}
		>
			<Paper elevation={8}>
				<AppBar
					position="static"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						background: "black",
						padding: 1,
					}}
				>
					<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
						History
					</Typography>
				</AppBar>
				{tasks.map((history) => (
					<HistoryItem key={history.id} text={history.name} />
				))}
			</Paper>
		</Box>
	);
};

export default History;
