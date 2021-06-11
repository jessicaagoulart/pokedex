import React from "react";
import "../../assets/css/cardDetails.css";
import color from "../Colors/index";
import CardTag from "./CardTag";
import { BrowserRouter as Router, Link } from "react-router-dom";
import pokeball from "../../assets/img/pokeball.png";

function CardDetails({ pokemon }) {
	console.log(pokemon);

	return (
		<Router forceRefresh={true}>
			<div>
				<div
					className="card-details"
					style={{ backgroundColor: color({ pokemon }) }}
				>
					<div className="details-voltar">
						<Link className="details-voltar-link" to={"/"}>
							Voltar
						</Link>
					</div>

					<h1 style={{ color: color({ pokemon }) }}>{pokemon.name}</h1>

					<div className="details-header">
						<div className="img-details">
							<img
								className="details-pokemon"
								src={pokemon.sprites.other["official-artwork"].front_default}
								alt={pokemon.name}
							></img>
							<img
								className="details-pokebola"
								src={pokeball}
								alt={"pokebola"}
							></img>
						</div>

						<div className="info-details">
							<div className="info-details-up">
								<div className="id-details">
									<h2>#{pokemon.id}</h2>
								</div>
								<CardTag pokemon={pokemon} />
							</div>
						</div>
					</div>

					<div className="card-details-conteudo">
						<div className="data-details">
							<h3>Pokedéx Data</h3>
							<p>Peso: {pokemon.weight / 10} kg</p>
							<p>Altura: {pokemon.height / 10} m</p>
							<p>HP: {pokemon.stats[0].base_stat}</p>
							<p>Ataque: {pokemon.stats[1].base_stat}</p>
							<p>Defesa: {pokemon.stats[2].base_stat}</p>
							<p>Ataque Especial: {pokemon.stats[3].base_stat}</p>
							<p>Velocidade: {pokemon.stats[5].base_stat}</p>
						</div>

						<div className="data-details">
							<h3>Habilidades</h3>
							<div className="abilities">
								{pokemon.abilities.map((ability, i) => {
									return <p>{ability.ability.name.toUpperCase()}</p>;
								})}
							</div>
							<h3>Movimentos</h3>
							<div className="moves">
								<p>{pokemon.moves[0].move.name.toUpperCase()}</p>
								<p>{pokemon.moves[1].move.name.toUpperCase()}</p>
								<p>{pokemon.moves[2].move.name.toUpperCase()}</p>
								<p>{pokemon.moves[3].move.name.toUpperCase()}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default CardDetails;
