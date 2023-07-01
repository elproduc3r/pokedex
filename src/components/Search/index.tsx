import styled from "@emotion/styled";
import { RootState } from "../../store";
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToHistory, setCurrentPokemon, setErrorMsg } from "../../features/Search/search.slice";
import { PokemonTypes, PokemonMovesType, PokemonAbilitiesType } from "./types";

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border-width: 0px;
`;

const StyledButton = styled.button`
  background-color: #fcdd00;
  color: black;
  font-size: 1rem;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  padding: .5rem 1rem;
  border-width: 0px;
  margin-left: 1rem;
`;

const Search = () => {

  const [query, setQuery] = useState<any>("");
  const dispatch = useDispatch();
  const {history} = useSelector((state: RootState) => state.search);

  const getPokemon = async (e: any) => {
    e.preventDefault();
    const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

    let selectedPokemon = history.find(character => character.name === query);
    if(!selectedPokemon) {
      const response = await fetch(`${POKEMON_API}${query}`);
      if (response.status >= 200 && response.status < 300) {
        const jsonData = await response.json();
        const {
          name,
          sprites,
          types,
          moves,
          abilities,
        } = jsonData;

        const allTypes = types.map((item: PokemonTypes) => item.type.name);
        const allMoves = moves.map((item: PokemonMovesType) => item.move.name);
        const allAbilities = abilities.map((item: PokemonAbilitiesType) => item.ability.name);

        selectedPokemon = {
          name,
          img: sprites.other["official-artwork"].front_default,
          types: allTypes,
          moves: allMoves,
          abilities: allAbilities
        };

        dispatch(addToHistory(selectedPokemon));

      } else if(response.status === 404) {
        dispatch(setErrorMsg(`No results for "${query}". Please try again.`));
      }
    }

    if(selectedPokemon) {
      dispatch(setCurrentPokemon(selectedPokemon));
      dispatch(setErrorMsg());
    }

  };

  return (
    <form>
      <StyledInput type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <StyledButton onClick={getPokemon}>Search</StyledButton>
    </form>
  )
};

export default Search;