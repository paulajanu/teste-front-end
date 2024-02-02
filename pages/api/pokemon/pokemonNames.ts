import { NextApiRequest, NextApiResponse } from 'next';
import { capitalizeFirstLetter } from '../../../src/utils';

export default async function fetchPokemonNames(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  try {
    const maxPokemons: number = 200;
    const api: string = `https://pokeapi.co/api/v2/pokemon/`
    const response = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await response.json();
    const pokemonNames = data.results.map(({ name }: { name: string }) => capitalizeFirstLetter(name));

    pokemonNames.sort(); 

    res.status(200).json(pokemonNames);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Pokemon' });
  }
}
