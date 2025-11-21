import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as St from './styles';
import { Movie } from '../../services/movies';

type Props = {
  movie: Movie;
  onPress: () => void;
  size: number;
};

export default function MovieCard({ movie, onPress, size }: Props) {
  const posterUrl = movie.poster_path
    ? { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
    : require('../../assets/logo.png');

  return (
    <TouchableOpacity onPress={onPress}>
      <St.PosterWrapper style={{ width: size }}>
        <St.Poster source={posterUrl} resizeMode="cover" />
      </St.PosterWrapper>
    </TouchableOpacity>
  );
}
