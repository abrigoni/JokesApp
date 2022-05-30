import Realm from 'realm';
import {Joke} from '../types/Joke';
import {JokeSchema, JOKE_SCHEMA_NAME} from './schemas';




export const realm_readJokes = async () => {
  try {
    const realm = await Realm.open({schema: [JokeSchema], schemaVersion: 2});
    const jokes = realm.objects(JOKE_SCHEMA_NAME);
    console.log(JSON.parse(JSON.stringify(jokes)));
    realm.close();
    return jokes;
  } catch (error) {
    console.error(error);
  }
};

export const realm_saveJoke = async (joke: Joke) => {
  try {
    const realm = await Realm.open({
      path: 'db',
      schema: [JokeSchema],
    });
    const savedJoke = realm.write(() => {
      console.log('Creating Joke...');
      const savedJoke = realm.create(JOKE_SCHEMA_NAME, joke);
      console.log('Created: ', savedJoke);
      console.log(savedJoke.toJSON());
      return savedJoke;
    });
    realm.close();
    return savedJoke;
  } catch (error) {
    console.error(error);
  }
};
