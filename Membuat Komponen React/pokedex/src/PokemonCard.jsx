export default function PokemonCard({ index, title, isi }) {
	const url =
		"https://www.pokemon.com/static-assets/" +
		"content-assets/cms2/img/pokedex/detail/" +
		`${index.padStart(3, "0")}.png`;
	const handleButtonClick = (e) => {
		window.location.href = `https://www.pokemon.com/us/pokedex/${title.toLowerCase()}`;
	};
	return (
		<div
			className="card mb-4 shadow p-3 mb-5 bg-body rounded"
			style={{ minWidth: "15rem" }}
		>
			<img
				src={url}
				className="card-img-top"
				style={{ backgroundColor: "silver" }}
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{isi}</p>
				<button className="btn btn-primary btn-sm" onClick={handleButtonClick}>
					Lihat Selengkapnya...
				</button>
			</div>
		</div>
	);
}
