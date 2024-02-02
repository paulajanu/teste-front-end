import { useState, useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default function CitiesList() {
  const [pokemonCities, setPokemonCities] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemonCities = async () => {
      try {
        const response = await fetch('/api/pokemon/pokemonCities');

        if (!response.ok) {
          throw new Error(`Request error: ${response.status}`);
        }

        const data = await response.json();
        setPokemonCities(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonCities();
  }, []);

  return (
    <div>
      <Select
        placeholder="Selecione sua cidade"
        style={{ width: 265 }}
        size="large"
      >
        {pokemonCities.map((name, index) => (
          <Option key={index} value={name}>
            {name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
