import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Main = () => {

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchCharacters = async () => {
			const response = await axios.get("https://rickandmortyapi.com/api/character");
			setCharacters(response.data.results.sort((a, b) => a.name.localeCompare(b.name)));
		};
		fetchCharacters();
	}, []);

	return (
		<div className="container">
			<header>
				<nav>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Characters</a>
						</li>
						<li>
							<a href="#">Episodes</a>
						</li>
						<li>
							<a href="#">Locations</a>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<table>
					<thead>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Status</th>
							<th>Species</th>
							<th>Gender</th>
						</tr>
					</thead>
					<tbody>
						{characters.map((character) => (
							<tr key={character.id}>
								<td>
									<img src={character.image} alt={character.name} />
								</td>
								<td>{character.name}</td>
								<td>{character.status}</td>
								<td>{character.species}</td>
								<td>{character.gender}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
			<footer>
				{/* Footer content here */}
			</footer>
		</div>
	);
};


export default Main