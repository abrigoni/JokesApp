import { Colors } from "./colors";

const JOKE_CARD_COLORS: string[] = [
  Colors.purple,
  Colors.orange,
  Colors.red,
  Colors.green,
];

type JOKE_INDEXES = 0 | 1 | 2 | 3;

export const randomCardColor: () => string = () => {
  const index: JOKE_INDEXES = Math.floor(Math.random() * (3 + 1)) as JOKE_INDEXES;
  return JOKE_CARD_COLORS[index];
};

