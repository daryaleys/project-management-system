import { Dispatch, SetStateAction } from "react";
import { IssueFilter, IssueStatus } from "../../types/issue-type";
import Input from "../ui/input/Input";
import Select from "../ui/select/Select";
import classes from "./Filter.module.css";

interface FilterProps {
	filter: IssueFilter;
	setFilter: Dispatch<SetStateAction<IssueFilter>>;
	statusOptions: { value: string; name: string }[];
	boardOptions: { value: string; name: string }[];
}

function Filter({ filter, setFilter, statusOptions, boardOptions }: FilterProps) {
	return (
		<div className={classes.filter}>
			<div className={classes.filterSearch}>
				<Input value={filter.title} type="text" placeholder="Название задачи" onChange={(e) => setFilter({ ...filter, title: (e.target as HTMLInputElement).value })} />
				<Input value={filter.assignee} type="text" placeholder="Исполнитель" onChange={(e) => setFilter({ ...filter, assignee: (e.target as HTMLInputElement).value })} />
			</div>
			<div className={classes.filterSelect}>
				<Select defaultValue="Статус" options={statusOptions} value={filter.status} handleChange={(status: IssueStatus | "") => setFilter({ ...filter, status: status })} />
				<Select defaultValue="Доска" options={boardOptions} value={filter.boardId} handleChange={(boardId) => setFilter({ ...filter, boardId: boardId })} />
			</div>
		</div>
	);
}

export default Filter;
