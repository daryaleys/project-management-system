import classes from "./TaskFilter.module.css";
import { TaskFilters } from "../../types/tasks.type";
import Input from "../ui/input/Input";
import Select from "../ui/select/Select";
import { useBoardOptions, useStatusOptions } from "../../hooks/useSelectOptions";

interface FilterProps {
	filters: TaskFilters;
	setFilters: (filters: TaskFilters) => void;
}

function TaskFilter({ filters, setFilters }: FilterProps) {
	const handleChange = (field: keyof TaskFilters, value: string) => {
		setFilters({
			...filters,
			[field]: value,
		});
	};

	const statusOptions = useStatusOptions();
	const boardOptions = useBoardOptions();

	return (
		<div className={classes.filter}>
			<div className={classes.filterSearch}>
				<Input value={filters.title} type="text" placeholder="Название задачи" onChange={(e) => handleChange("title", e.target.value)} />
				<Input value={filters.assignee} type="text" placeholder="Исполнитель" onChange={(e) => handleChange("assignee", e.target.value)} />
			</div>
			<div className={classes.filterSelect}>
				<Select defaultValue="Статус" options={statusOptions} value={filters.status} onChange={(value) => handleChange("status", value)} />
				<Select defaultValue="Доска" options={boardOptions} value={filters.boardId} onChange={(value) => handleChange("boardId", value)} />
			</div>
		</div>
	);
}

export default TaskFilter;
