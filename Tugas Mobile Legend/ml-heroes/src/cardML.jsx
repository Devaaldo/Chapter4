import { useState } from "react";

export default function cardML({ data }) {
	const [detailVisible, setDetailVisible] = useState(false);

	const url =
		"https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_" +
		`${data.image}.png`;

	const showDetail = (e) => {
		e.preventDefault();
		setDetailVisible(true);
	};

	const hideDetail = (e) => {
		e.preventDefault();
		setDetailVisible(false);
	};

	return (
		<div className="card mb-4" style={{ width: "12rem" }}>
			<img src={url} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{data.name}</h5>
				{detailVisible && <p className="card-text">{data.description}</p>}
				<a
					href="#"
					class="card-link"
					onClick={detailVisible ? hideDetail : showDetail}
				>
					{detailVisible ? "Sembunyikan" : "Lihat"} Detail
				</a>
			</div>
		</div>
	);
}
