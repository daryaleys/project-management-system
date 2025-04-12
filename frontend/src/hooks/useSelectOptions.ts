import { useEffect, useState } from "react";
import { useBoards } from "../api/api-boards";
import { useUsers } from "../api/api-users";
import { SelectOptions } from "../components/ui/select/Select";
import { Board } from "../types/boards.type";
import { PRIORITY, STATUS } from "../types/tasks.type";
import { User } from "../types/user.type";

function useStatusOptions() {
	const [statusOptions, setStatusOptions] = useState<SelectOptions[]>([]);

	useEffect(() => {
		setStatusOptions(Object.entries(STATUS).map(([value, name]) => ({ value, name })));
	}, []);

	return statusOptions;
}

function usePriorityOptions() {
	const [priorityOptions, setPriorityOptions] = useState<SelectOptions[]>([]);

	useEffect(() => {
		setPriorityOptions(Object.entries(PRIORITY).map(([value, name]) => ({ value, name })));
	}, []);

	return priorityOptions;
}

function useBoardOptions() {
	const { data: boards } = useBoards();
	const [boardOptions, setBoardOptions] = useState<SelectOptions[]>([]);

	useEffect(() => {
		setBoardOptions(
			boards?.map((board: Board) => ({
				value: board.id,
				name: board.name,
			})) ?? []
		);
	}, [boards]);

	return boardOptions;
}

function useUserOptions() {
	const { data: users } = useUsers();
	const [userOptions, setUserOptions] = useState<SelectOptions[]>([]);

	useEffect(() => {
		setUserOptions(
			users?.map((user: User) => ({
				value: user.id,
				name: user.fullName,
			})) ?? []
		);
	}, [users]);

	return userOptions;
}

export { useStatusOptions, usePriorityOptions, useBoardOptions, useUserOptions };
