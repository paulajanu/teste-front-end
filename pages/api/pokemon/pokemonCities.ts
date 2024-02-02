import { NextApiRequest, NextApiResponse } from 'next';
import { capitalizeFirstLetter } from '../../../src/utils';

export default async function fetchPokemonCities(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  try {
    const maxCities: number = 200;
    const api: string = `https://pokeapi.co/api/v2/location/`
    const response = await fetch(`${api}/?limit=${maxCities}`)
    const data = await response.json();
    const pokemonCities = data.results.map((cities: { name: string }) => capitalizeFirstLetter(cities.name));

    pokemonCities.sort(); 

    res.status(200).json(pokemonCities);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Pokemon' });
  }
}
