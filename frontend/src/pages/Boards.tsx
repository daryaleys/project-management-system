import { useEffect, useState } from "react";
import { getBoards } from "../api/boards-api";
import BoardList from "../components/board-list/BoardList";

function Boards() {
	const [boards, setBoards] = useState([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchBoards = async () => {
		const data = await getBoards();
		setBoards(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchBoards();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	return (
		<>
			<BoardList boards={boards} />
		</>
	);
}

export default Boards;
