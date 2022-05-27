import React, {createContext, FC, useState} from 'react';
import {Joke} from '../types/Joke';

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
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);

  const saveJoke = (joke: Joke) => {
    if (!savedJokes.includes(joke)) {
      setSavedJokes((jokes: Joke[]) => [...jokes, joke]);
    }
  };

  const removeJoke = (id: string) => {
    setSavedJokes((jokes: Joke[]) =>
      jokes.filter((joke: Joke) => joke.id !== id),
    );
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
