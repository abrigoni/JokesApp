import React, {createContext, FC, useEffect, useState} from 'react';
import { JokeSchema, JOKE_SCHEMA_NAME } from '../realm/schemas';
import {Joke} from '../types/Joke';
import Realm from 'realm';

interface ContextProps {
  savedJokes: Joke[];
  saveJoke: (joke: Joke) => void;
  removeJoke: (id: string) => void;
}

export const AppContext = createContext<ContextProps>({
  savedJokes: [],
  saveJoke: (_joke: Joke) => {},
  removeJoke: (_id: string) => {},
});

const AppContextProvider: FC = ({children}) => {
  const [realm, setRealm] = useState<Realm>();
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);

  // initial load on realm connection + savedJokes from DB
  useEffect(() => {
    const openRealm = async () => {
      const r = await Realm.open({schema: [JokeSchema]});
      if (r != null && !r.isClosed) {
        setRealm(r);
        const result = r.objects<Joke>(JOKE_SCHEMA_NAME).map((value) => {
          return value.toJSON() as Joke;
        });
        setSavedJokes(result);
      }
    };
    openRealm();
    return () => {
      if (!!realm && !realm.isClosed) {
        realm.close();
      }
    };
  }, []);

  const realm_saveJoke = (joke: Joke) => {
    if (!!realm && !realm.isClosed) {
      realm.write(() => {
        realm.create(JOKE_SCHEMA_NAME, joke);
      });
    }
  };

  const realm_deleteJoke = (id: string) => {
    if (!!realm && !realm.isClosed) {
      realm.write(() => {
        const joke = realm.objectForPrimaryKey<Joke>(JOKE_SCHEMA_NAME, id);
        realm.delete(joke); 
      });
    }
  }

  const saveJoke = (joke: Joke) => {
    if (!savedJokes.includes(joke)) {
      setSavedJokes((jokes: Joke[]) => [...jokes, joke]);
      realm_saveJoke(joke);
    }
  };

  const removeJoke = (id: string) => {
    setSavedJokes((jokes: Joke[]) =>
      jokes.filter((joke: Joke) => joke.id !== id),
    );
    realm_deleteJoke(id);
  };

  return (
    <AppContext.Provider
      value={{
        savedJokes,
        removeJoke,
        saveJoke,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
