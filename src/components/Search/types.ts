
export interface PokemonType {
  name: string;
  url: string;
};

export interface PokemonTypes {
  slot: Number;
  type: PokemonType;
};

export interface PokemonMovesType {
  move: {
    name: string;
  }
}


