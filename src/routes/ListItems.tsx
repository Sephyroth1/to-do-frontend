import React from "react";
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	Checkbox,
	ListItemText,
	IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Task = {
	task: {
		id: number;
		name: string;
	};
};

type ListItemProps = {
	onDelete: (id: number) => void;
};

type combinedProps = ListItemProps & Task;

const ListItemComponent: React.FC<combinedProps> = ({ task, onDelete }) => {
	const handleDeleteClick = () => {
		onDelete(task.id);
	};
	return (
		<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="delete" onClick={handleDeleteClick}>
					<DeleteIcon />
				</IconButton>
			}
			id={`list-item-${task.id}`}
			className="list-item"
		>
			<ListItemButton>
				<ListItemIcon>
					<Checkbox />
				</ListItemIcon>
				<ListItemText id="text" primary={task.name} />
			</ListItemButton>
		</ListItem>
	);
};

export default ListItemComponent;
