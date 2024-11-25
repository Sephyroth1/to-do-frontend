import "./App.css";
import { TextField, List, Button } from "@mui/material";
import Listitem from "./ListItems";
import History from "./History";
import Calender from "./Calender";
import { useState } from "react";

type task = {
	id: number;
	name: string;
};

function App() {
	const [tasks, setTasks] = useState<task[]>([]);
	const [text, setText] = useState("");

	const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const onSubmit = () => {
		if (text.trim()) {
			setTasks((prevTasks) => [...prevTasks, { id: Date.now(), name: text }]);
			setText("");
		}
	};

	const handleDeleteTask = (taskId: number) => {
		setTasks((prevTask) => prevTask.filter((task) => task.id !== taskId));
	};
	return (
		<section className="container">
			<TextField
				variant="outlined"
				label="Be Productive. Write Something!"
				id="task-field"
				size="medium"
				className="field"
				sx={{ margin: "20px" }}
				onChange={handleTextField}
			></TextField>
			<Button variant="contained" onClick={onSubmit}>
				Submit
			</Button>
			<div className="flex-container">
				<Calender></Calender>
				<List className="unlisted-container">
					{tasks.map((tasks) => (
						<Listitem key={tasks.id} task={tasks} onDelete={handleDeleteTask} />
					))}
				</List>
				<History tasks={tasks}></History>
			</div>
		</section>
	);
}

export default App;
