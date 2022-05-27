import {useLazyQuery} from '@apollo/client';
import {useCallback, useEffect, useState} from 'react';
import {FETCH_JOKE} from '../graphql/queries';
import {Joke, JokeQueryResponse} from '../types/Joke';

const useJokes = () => {
  const [fetchJoke, {loading}] = useLazyQuery<JokeQueryResponse>(FETCH_JOKE, {
    fetchPolicy: 'network-only',
  });
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [activeJokes, setActiveJokes] = useState<Joke[]>([]);
  const [fetchMore, setFetchMore] = useState(false);

  const handleFetch: () => void = useCallback(async () => {
    const newJokes: Joke[] = [];
    for (let i = 0; i <= 3; i++) {
      const response = await fetchJoke();
      if (response.data) {
        newJokes.push(response.data.joke);
      }
    }
    setJokes([...jokes, ...newJokes]);
    setActiveJokes(newJokes);
  }, [jokes, setJokes, fetchJoke]);

  // initial load
  useEffect(() => {
    handleFetch();
  }, []);

  const triggerFetchMore = useCallback(() => {
    setFetchMore(true);
    setActiveJokes([]);
  }, [setFetchMore]);

  useEffect(() => {
    if (fetchMore) {
      handleFetch();
      setFetchMore(false);
    }
  }, [fetchMore, handleFetch]);

  return {
    activeJokes,
    loading: loading || activeJokes.length < 4,
    triggerFetchMore,
  };
};

export default useJokes;
