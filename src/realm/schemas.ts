export const JOKE_SCHEMA_NAME = 'Joke';

export const JokeSchema = {
  name: JOKE_SCHEMA_NAME,
  properties: {
    id: 'string',
    joke: 'string',
    permalink: 'string',
  },
  primaryKey: 'id',
};
