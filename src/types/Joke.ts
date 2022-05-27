export type Joke = {
  id: string;
  joke: string;
  permalink?: string;
};

export interface JokeQueryResponse {
  joke: Joke;
}
