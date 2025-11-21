import React from 'react';
import { useWindowDimensions } from 'react-native';

import { Appbar, Button } from 'react-native-paper';

import * as St from './styles';
import { useWatchlist } from '../../store/useWatchlist';
import {
  DetailScreenNavigation,
  DetailScreenRoute,
} from '../../navigation/types';
import { useTheme } from 'styled-components/native';

type Props = {
  navigation: DetailScreenNavigation;
  route: DetailScreenRoute;
};

export default function DetailScreen({ route, navigation }: Props) {
  const { movie } = route.params;
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const saved = isInWatchlist(movie.id);

  const theme = useTheme();

  const { width } = useWindowDimensions();
  const posterWidth = Math.min(width * 0.55, 260);

  const posterUrl = movie.poster_path
    ? { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
    : require('../../assets/logo.png');

  return (
    <St.Container>
      <Appbar.Header>
        <Appbar.BackAction
          color={theme.colors.text}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content color={theme.colors.text} title="Movie Details" />
      </Appbar.Header>

      <St.PosterWrapper style={{ width: posterWidth }}>
        <St.Poster source={posterUrl} resizeMode="cover" />
      </St.PosterWrapper>

      <St.Content>
        <St.TitleText>{movie.title}</St.TitleText>

        {movie.release_date && (
          <St.InfoText>Release: {movie.release_date}</St.InfoText>
        )}

        {movie.vote_average !== undefined && movie.vote_average !== null && (
          <St.InfoText>Rating: {movie.vote_average.toFixed(1)} ⭐</St.InfoText>
        )}

        <Button
          mode={saved ? 'contained' : 'outlined'}
          style={{ marginTop: 16 }}
          onPress={() =>
            saved ? removeFromWatchlist(movie.id) : addToWatchlist(movie)
          }
        >
          {saved ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </Button>

        <St.InfoText style={{ marginTop: 20 }}>
          {movie.overview || 'No overview available.'}
        </St.InfoText>
      </St.Content>
    </St.Container>
  );
}
