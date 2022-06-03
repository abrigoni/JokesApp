import {useLazyQuery} from '@apollo/client';
import {useCallback, useEffect, useState} from 'react';
import {FETCH_JOKE} from '../graphql/queries';
import {Joke, JokeQueryResponse} from '../types/Joke';

const useJokes = () => {
  const [fetchJoke, {loading}] = useLazyQuery<JokeQueryResponse>(FETCH_JOKE, {
    fetchPolicy: 'network-only',
  });
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleFetch: () => void = useCallback(async () => {
    const newJokes: Joke[] = [];
    for (let i = 0; i <= 3; i++) {
      const response = await fetchJoke();
      if (response.data) {
        newJokes.push(response.data.joke);
      }
    }
    setJokes([...jokes, ...newJokes]);
  }, [jokes, setJokes, fetchJoke]);

  // initial load
  useEffect(() => {
    handleFetch();
  }, []);

  const fetchMore = () => {
    setActiveIndex(activeIndex + 4);
    handleFetch();
  };

  const fetchBack = () => {
    if (activeIndex > 4) {
      setActiveIndex(activeIndex - 4);
    }
  };
  return {
    activeJokes: jokes.slice(activeIndex, activeIndex + 4),
    loading: loading || jokes.length % 4 !== 0,
    triggerFetchMore: fetchMore,
    triggerFetchBack: fetchBack,
  };
};

export default useJokes;
