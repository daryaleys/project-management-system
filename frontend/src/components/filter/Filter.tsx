import classes from "./Filter.module.css";
import { TaskFilter } from "../../types/tasks.type";
import Input from "../ui/input/Input";
import Select, { SelectOptions } from "../ui/select/Select";

interface FilterProps {
	filter: TaskFilter;
	setFilter: (filter: TaskFilter) => void;
	statusOptions: SelectOptions[];
	boardOptions: SelectOptions[];
}

function Filter({ filter, setFilter, statusOptions, boardOptions }: FilterProps) {
	const handleChange = (field: keyof TaskFilter, value: string) => {
		setFilter({
			...filter,
			[field]: value,
		});
	};

	return (
		<div className={classes.filter}>
			<div className={classes.filterSearch}>
				<Input value={filter.title} type="text" placeholder="Название задачи" onInputChange={(value) => handleChange("title", value)} />
				<Input value={filter.assignee} type="text" placeholder="Исполнитель" onInputChange={(value) => handleChange("assignee", value)} />
			</div>
			<div className={classes.filterSelect}>
				<Select defaultValue="Статус" options={statusOptions} value={filter.status} onChange={(value) => handleChange("status", value)} />
				<Select defaultValue="Доска" options={boardOptions} value={filter.boardId} onChange={(value) => handleChange("boardId", value)} />
			</div>
		</div>
	);
}

export default Filter;
