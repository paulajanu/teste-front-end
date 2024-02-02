import { NextApiRequest, NextApiResponse } from 'next';
import { capitalizeFirstLetter } from '../../../src/utils';

export default async function fetchPokemonRegions(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  try {
    const api: string = 'https://pokeapi.co/api/v2/region'
    const response = await fetch(api)
    const data = await response.json();
    const pokemonRegions = data.results.map((region: { name: string }) => capitalizeFirstLetter(region.name));

    pokemonRegions.sort(); 

    res.status(200).json(pokemonRegions);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Pokemon' });
  }
}
