import { getAllPokemon, getPokemon } from "../../api";
import React, { useState, useEffect } from "react";
import Card from "../Card/index";
import Navbar from "../Navbar";
import CardDetails from "../Card/CardDetails";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../assets/css/listaPokemon.css";

function ListaPokemon() {
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
		if (!nextUrl) {
			return;
		}
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
		<Router>
			<Navbar />
			<Route exact path="/">
				<div>
					{" "}
					{loading ? (
						<h1
							style={{
								textAlign: "center",
								fontSize: "2rem",
								marginTop: "20px",
							}}
						>
							Carregando...
						</h1>
					) : (
						<>
							<div className="btn">
								<button onClick={prev}>Anterior</button>
								<button onClick={next}>Próximo</button>
							</div>

							<div className="page">
								<p>Página {page}</p>
							</div>

							<div className="principal">
								{pokemonData.map((pokemon, i) => {
									const id = pokemon.id;
									return (
										<Link key={pokemon.id} className="link-card" to={`/pokemon/${id}`}>
											<Card key={id} pokemon={pokemon} />
										</Link>
									);
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
			</Route>
			{pokemonData.map((pokemon, i) => {
				const identifier = pokemon.id;
				return (
					<Route key={identifier} path={`/pokemon/${identifier}`}>
						<CardDetails key={identifier} pokemon={pokemon} />
					</Route>
				);
			})}
		</Router>
	);
}
export default ListaPokemon;
