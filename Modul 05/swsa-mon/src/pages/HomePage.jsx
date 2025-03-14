export default function HomePage({ changePage }) {
	return (
		<>
			<h1>Summoners War: Sky Arena (SWSA)</h1>
			<p className="lead">
				Summoners War: Sky Arena is a mobile turn-based strategy massively
				multiplayer online game created by South Korean game developer, Com2uS.
				Players assume the role of a summoner, opening scrolls in order to
				acquire monsters to fight in turn-based battles.
			</p>
			<p className="lead">
				<button
					className="btn btn-lg btn-light fw-bold border-white bg-white"
					href="#gallery"
					onClick={(e) => {
						e.preventDefault();
						changePage("gallery")();
					}}
				>
					View Monsters
				</button>
			</p>
		</>
	);
}
