import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FETCH_JOKE } from "../graphql/queries";
import { Joke, JokeQueryResponse } from "../types/Joke";


const useJokes = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [fetchJoke, { loading }] = useLazyQuery<JokeQueryResponse>(FETCH_JOKE, {fetchPolicy: 'network-only'});

  useEffect(() => {
    const fetchJokeHelper = async () => {
      const joke = await fetchJoke();
      if (joke.data) {
        setJokes([...jokes, joke.data.joke]);
      }
    };
    if (jokes.length < 4 && !loading) {
      fetchJokeHelper();
    }
  }, [setJokes, jokes, fetchJoke]);

  return {jokes, loading: loading || jokes.length < 4};
};

export default useJokes;