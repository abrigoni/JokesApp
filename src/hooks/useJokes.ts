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
  const [loadIndex, setLoadIndex] = useState<boolean>(false);

  // fetch 10 new jokes
  const loadJokes: () => void = useCallback(async () => {
    const newJokes: Joke[] = [];
    for (let i = 0; i < 10; i++) {
      const response = await fetchJoke();
      if (response.data) {
        newJokes.push(response.data.joke);
      }
    }
    setJokes([...jokes, ...newJokes]);
  }, [jokes, setJokes, fetchJoke]);

  // initial load
  useEffect(() => {
    loadJokes();
  }, []);

  useEffect(() => {
    // background load of 10 new jokes
    if (activeIndex > 0 && (jokes.length - activeIndex) === 2) {
      loadJokes();
    }
  }, [activeIndex, jokes]);

  // update index to display 4 new more jokes
  const fetchMore = () => {
    setLoadIndex(true);
    setActiveIndex(activeIndex + 4);
    setTimeout(() => {
      setLoadIndex(false);
    }, 500);
  };

  // update index to display 4 previous jokes
  const fetchBack = () => {
    if (activeIndex >= 4) {
      setLoadIndex(true);
      setActiveIndex(activeIndex - 4);
      setTimeout(() => {
        setLoadIndex(false);
      }, 500);
    }
  };
  return {
    activeJokes: jokes.slice(activeIndex, activeIndex + 4),
    loading: loading || loadIndex,
    triggerFetchMore: fetchMore,
    triggerFetchBack: fetchBack,
  };
};

export default useJokes;
