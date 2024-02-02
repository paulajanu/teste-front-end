import { useState, useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default function RegionsList() {
  const [pokemonRegions, setPokemonRegions] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemonRegions = async () => {
      try {
        const response = await fetch('/api/pokemon/pokemonRegions');

        if (!response.ok) {
          throw new Error(`Request error: ${response.status}`);
        }

        const data = await response.json();
        setPokemonRegions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonRegions();
  }, []);

  return (
    <div>
      <Select
        placeholder="Selecione sua região"
        style={{ width: 265 }}
        size="large"
      >
        {pokemonRegions.map((name, index) => (
          <Option key={index} value={name}>
            {name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
