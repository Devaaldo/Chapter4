import { useState } from "react";
import PokemonCard from "./PokemonCard.jsx";

export default function App() {
	return (
		<div className="container my-4">
			<h1>Pokedex</h1>
			<div className="row">
				<div className="col">
					<PokemonCard
						index="1"
						title="Bulbasaur"
						isi="For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow."
					/>
				</div>
				<div className="col">
					<PokemonCard
						index="2"
						title="Ivysaur"
						isi="The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger."
					/>
				</div>
				<div className="col">
					<PokemonCard
						index="3"
						title="Venusaur"
						isi="While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime."
					/>
				</div>
				<div className="col">
					<PokemonCard
						index="4"
						title="Charmander"
						isi="The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly."
					/>
				</div>
				<div className="col">
					<PokemonCard
						index="5"
						title="Charmelon"
						isi="When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents."
					/>
				</div>
				<div className="col">
					<PokemonCard
						index="6"
						title="Charizard"
						isi="If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade."
					/>
				</div>
			</div>
		</div>
	);
}
