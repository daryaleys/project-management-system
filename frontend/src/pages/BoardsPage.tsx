import BoardList from "../components/board-list/BoardList";
import { useBoards } from "../api/api-boards";

function BoardsPage() {
	const { data: boards, isLoading, error } = useBoards();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	return (
		<>
			<BoardList boards={boards} />
		</>
	);
}

export default BoardsPage;
