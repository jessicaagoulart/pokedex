import React from "react";
import "../../assets/css/card.css";
import color from "../Colors/index";
import CardTag from "./CardTag";
import pokeball from "../../assets/img/pokeball.png";

function Card({ pokemon }) {
	return (
		<div style={{ backgroundColor: color({ pokemon }) }} className="card">
			<div className="card-info">
				<div className="card-nome">
					<h2>#{pokemon.id}</h2>
					<h2>{pokemon.name.toUpperCase()}</h2>
				</div>
				<CardTag pokemon={pokemon} />
			</div>

			<div className="card-img">
				<img className="card-img__pokebola" src={pokeball} />
				<img
					className="card-img__pokemon"
					src={pokemon.sprites.other["official-artwork"].front_default}
					alt={pokemon.name}
				/>
			</div>
		</div>
	);
}

export default Card;
