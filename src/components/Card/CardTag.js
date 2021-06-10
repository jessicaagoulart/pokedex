import React from "react";
import "../../assets/css/cardTag.css";

export default function CardTag({ pokemon }) {
	return (
		<div className="card-tags">
			{pokemon.types.map((type) => {
				let color = "";
				const typeTag = type.type.name;
				if (typeTag === "bug") {
					color = "#90c12c";
				} else if (typeTag === "water") {
					color = "#4d90d5";
				} else if (typeTag === "normal") {
					color = "#9099a1";
				} else if (typeTag === "fighting") {
					color = "#ce4069";
				} else if (typeTag === "flying") {
					color = "#8fa8dd";
				} else if (typeTag === "poison") {
					color = "#ab6ac8";
				} else if (typeTag === "ground") {
					color = "#d97746";
				} else if (typeTag === "rock") {
					color = "#c7b78b";
				} else if (typeTag === "ground") {
					color = "#d97746";
				} else if (typeTag === "ghost") {
					color = "#5269ac";
				} else if (typeTag === "steel") {
					color = "#5a8ea1";
				} else if (typeTag === "fire") {
					color = "#ff9c54";
				} else if (typeTag === "grass") {
					color = "#63bb5b";
				} else if (typeTag === "electric") {
					color = "#f3d23b";
				} else if (typeTag === "psychic") {
					color = "#f97176";
				} else if (typeTag === "ice") {
					color = "#74cec0";
				} else if (typeTag === "dragon") {
					color = "#0a6dc4";
				} else if (typeTag === "dark") {
					color = "#5a5366";
				} else if (typeTag === "fairy") {
					color = "#ec8fe6";
				}

				return (
					<div style={{ backgroundColor: color }} className="card-type">
						<p>{type.type.name.toUpperCase()}</p>
					</div>
				);
			})}
		</div>
	);
}
