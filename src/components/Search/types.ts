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

export interface PokemonAbilitiesType {
  ability: {
    name: string;
  }
}
export interface SpriteItemType {
  [index: string]: string;
}

export type SpritesType = SpriteItemType & {
  other: {
    dreamworld: SpriteItemType;
    home: SpriteItemType;
    "official-artwork": SpriteItemType;
  }
}
