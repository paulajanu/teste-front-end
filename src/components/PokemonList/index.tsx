import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default function PokemonList() {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('/api/pokemon/pokemonNames');

        if (!response.ok) {
          throw new Error(`Request error: ${response.status}`);
        }

        const data = await response.json();
        setPokemonNames(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, []);

  const onChange = (value: string) => {
    setSearchValue(value);
  };

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  const filterOption = (input: string, option?: { children: string; value: string }) =>
    (option?.children ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div>
      <Select
        showSearch
        placeholder="Selecione seu pokémon"
        style={{ width: 438 }}
        size="large"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        value={searchValue || undefined}
      >
        {pokemonNames.map((name, index) => (
          <Option key={index} value={name}>
            {name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
