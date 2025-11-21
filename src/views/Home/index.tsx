import * as St from './styles';

import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import { getPopularMovies, Movie, searchMovies } from '../../services/movies';
import { TabsScreenNavigation } from '../../navigation/types';
import { useWatchlist } from '../../store/useWatchlist';

type Props = {
  navigation: TabsScreenNavigation;
};

export default function HomeScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();
  const tabBarHeight = useBottomTabBarHeight();

  const { cachedMovies, setCachedMovies } = useWatchlist();

  const numColumns = width > 500 ? 3 : 2;
  const spacing = 12;
  const horizontalPadding = 16 * 2;
  const cardSize =
    (width - horizontalPadding - spacing * (numColumns - 1)) / numColumns;

  const requestMovies = useCallback(
    async (reset = false) => {
      if (loading) return;

      setLoading(true);

      try {
        const nextPage = reset ? 1 : page;
        const response = await getPopularMovies(nextPage);

        setMovies(prev =>
          reset ? response.results : [...prev, ...response.results],
        );

        setPage(prev => (reset ? 2 : prev + 1));
        setError(false);

        if (reset) {
          setCachedMovies(response.results);
        }
      } catch {
        if (cachedMovies.length > 0) {
          setMovies(cachedMovies);
          setError(false);
        } else {
          setError(true);
        }
      }

      setLoading(false);
    },
    [loading, page, setCachedMovies, cachedMovies],
  );

  const requestSearchMovie = useCallback(
    async (name: string) => {
      if (loading) return;

      setLoading(true);

      try {
        const response = await searchMovies(name);

        setMovies(response.results);
        setIsSearching(true);
        setError(false);
      } catch {
        setError(movies.length === 0);
      }

      setLoading(false);
    },
    [loading, movies],
  );

  useEffect(() => {
    if (search.length > 0) {
      requestSearchMovie(search);
    } else {
      setIsSearching(false);
      requestMovies(true);
    }
  }, [search]);

  return (
    <St.Container>
      <SearchBar
        placeholder="What do you want to watch?"
        value={search}
        onChangeText={setSearch}
      />

      {error ? (
        <St.ErrorContainer>
          <St.ErrorImage source={require('../../assets/logo.png')} />

          <St.ErrorMessage>
            Something went wrong while loading movies.
          </St.ErrorMessage>

          <St.RetryButton onPress={() => requestMovies(true)}>
            <St.RetryText>Try Again</St.RetryText>
          </St.RetryButton>
        </St.ErrorContainer>
      ) : (
        <St.Section>
          <FlatList
            data={movies}
            key={numColumns}
            numColumns={numColumns}
            columnWrapperStyle={{ gap: spacing }}
            showsVerticalScrollIndicator={false}
            onEndReached={() =>
              isSearching ? undefined : requestMovies(false)
            }
            onEndReachedThreshold={0.5}
            contentContainerStyle={{
              paddingBottom: tabBarHeight + 24,
            }}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                size={cardSize}
                onPress={() => navigation.navigate('Detail', { movie: item })}
              />
            )}
          />
        </St.Section>
      )}
    </St.Container>
  );
}
