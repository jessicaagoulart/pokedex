import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./api";
import Card from "./components/Card/index";
import Navbar from "./components/Navbar/index";

function App() {
	const [pokemonData, setPokemonData] = useState([]);
	const [nextUrl, setNextUrl] = useState("");
	const [prevUrl, setPrevUrl] = useState("");
	const [loading, setLoading] = useState(true);
	const base_url = "https://pokeapi.co/api/v2/pokemon/";
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function fetchData() {
			let response = await getAllPokemon(base_url);
			setNextUrl(response.next);
			setPrevUrl(response.previus);
			await loadingPokemon(response.results);
			setLoading(false);
		}
		fetchData();
	}, []);

	const next = async () => {
		setLoading(true);
		let data = await getAllPokemon(nextUrl);
		await loadingPokemon(data.results);
		setNextUrl(data.next);
		setPrevUrl(data.previous);
		setLoading(false);
		setPage(page + 1);
	};

	const prev = async () => {
		if (!prevUrl) {
			setPage(1);
			return;
		}
		setLoading(true);
		let data = await getAllPokemon(prevUrl);
		await loadingPokemon(data.results);
		setNextUrl(data.next);
		setPrevUrl(data.previous);
		setLoading(false);
		setPage(page - 1);
	};

	const loadingPokemon = async (data) => {
		let _pokemonData = await Promise.all(
			data.map(async (pokemon) => {
				let pokemonRecord = await getPokemon(pokemon.url);
				return pokemonRecord;
			})
		);
		setPokemonData(_pokemonData);
	};

	return (
		<div>
			{loading ? (
				<h1
					style={{ textAlign: "center", fontSize: "2rem", marginTop: "20px" }}
				>
					Carregando...
				</h1>
			) : (
				<>
					<Navbar />

					<div className="btn">
						<button onClick={prev}>Anterior</button>
						<button onClick={next}>Próximo</button>
					</div>

					<div className="page">
						<p>Página {page}</p>
					</div>

					<div className="principal">
						{pokemonData.map((pokemon, i) => {
							return <Card key={i} pokemon={pokemon} />;
						})}
					</div>

					<div className="btn">
						<button onClick={prev}>Anterior</button>
						<button onClick={next}>Próximo</button>
					</div>

					<div className="page">
						<p>Página {page}</p>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
