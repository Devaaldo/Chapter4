import CardML from "./cardML.jsx";
import mlData from "./data.jsx";

export default function App() {
	return (
		<div className="container my-4">
			<h1>Mobile Legends Heroes</h1>
			<div className="row">
				{mlData.map((item, key) => (
					<div className="col" key={key}>
						<CardML data={item} />
					</div>
				))}
			</div>
		</div>
	);
}
