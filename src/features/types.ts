export interface PokemonCardProps {
  name: string;
  url: string;
}

export interface StatsProps {
  base_stat: number;
  effort: number;
  stat: { name: string };
}

export interface PokoTypesProps {
  slot: number;
  type: { name: string };
}
