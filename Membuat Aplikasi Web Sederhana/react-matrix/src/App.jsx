import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="container">
				<h1>Penjumlahan Baris dan Kolom Matriks</h1>
				<hr />
				<form>
					<div className="row mb-4">
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input readOnly />
						</div>
					</div>
					<div className="row mb-4">
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input readOnly />
						</div>
					</div>
					<div className="row mb-4">
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input readOnly />
						</div>
					</div>
					<div className="row mb-4">
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input type="number" />
						</div>
						<div className="col">
							<input readOnly />
						</div>
					</div>
					<div className="row mb-4">
						<div className="col">
							<input readOnly />
						</div>
						<div className="col">
							<input readOnly />
						</div>
						<div className="col">
							<input readOnly />
						</div>
						<div className="col">
							<input readOnly />
						</div>
						<div className="col">
							<button type="button" className="btn btn-primary">
								Proses
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
