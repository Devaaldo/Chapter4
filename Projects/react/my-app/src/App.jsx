import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// function NumberInput() {
// 	return (
// 		<input type="number" className="form-control"/>
// 	)
// }

function App() {
	// const [message, setMessage] = useState(
	// 	"Tekan tombol Proses untuk melakukan perhitungan"
	// );
	// const [alertClass, setAlertClass] = useState("alert alert-info");
	// const [alertType, setalertType] = useState("info");
	const [alert, setAlert] = useState({
		type: "info",
		text: "Tekan tombol Proses untuk melakukan perhitungan",
	});

	const doProcess = () => {
		// setMessage("Maaf fitur perhitungan belum diimplementasikan");
		// setAlertClass("alert alert-danger");
		// setAlertType('danger');
		setAlert({
			type: "danger",
			text: "Maaf fitur perhitungan belum diimplementasikan",
		});
	};

	return (
		<div className="container">
			<h1>Penjumlahan Baris dan Kolom Matriks</h1>
			<hr />
			<div className={`alert alert-${alert.type}`} role="alert">
				{alert.text}
			</div>
			{/* <div className={alertClass} role="alert">
				{message}
			</div> */}

			{/* <div className={`alert alert-${alerttype}`} role="alert">
				{message}
			</div> */}
			<div className="row mb-4">
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input readOnly className="form-control" />
				</div>
			</div>
			<div className="row mb-4">
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input readOnly className="form-control" />
				</div>
			</div>
			<div className="row mb-4">
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input type="number" className="form-control" />
				</div>
				<div className="col">
					<input readOnly className="form-control" />
				</div>
			</div>
			<div className="row mb-4">
				<div className="col">
					<input readOnly className="form-control" />
				</div>
				<div className="col">
					<input readOnly className="form-control" />
				</div>
				<div className="col">
					<input readOnly className="form-control" />
				</div>
				<div className="col">
					<button className="btn btn-primary" onClick={doProcess}>
						Proses
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
