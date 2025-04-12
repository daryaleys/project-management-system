import { useParams } from "react-router";

function Board() {
	let params = useParams();
	console.log(params);

	return (
		<>
			<h1>Страница конкретной доски</h1>
		</>
	);
}

export default Board;
