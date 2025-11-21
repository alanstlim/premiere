import React from 'react';

import { Appbar, IconButton } from 'react-native-paper';
import { FlatList, ListRenderItem } from 'react-native';
import * as St from './styles';
import { useWatchlist } from '../../store/useWatchlist';
import { Movie } from '../../services/movies';
import { TabsScreenNavigation } from '../../navigation/types';
import { useTheme } from 'styled-components/native';

type Props = {
  navigation: TabsScreenNavigation;
};

export default function WatchlistScreen({ navigation }: Props) {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const theme = useTheme();

  const renderItem: ListRenderItem<Movie> = ({ item: movie }) => {
    const posterUrl = movie.poster_path
      ? { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
      : require('../../assets/logo.png');

    return (
      <St.Row onPress={() => navigation.navigate('Detail', { movie })}>
        <St.PosterWrapper>
          <St.Poster source={posterUrl} resizeMode="cover" />
        </St.PosterWrapper>

        <St.InfoSection>
          <St.TitleText numberOfLines={2}>{movie.title}</St.TitleText>

          {movie.release_date && (
            <St.SubText>{movie.release_date.substring(0, 4)}</St.SubText>
          )}
        </St.InfoSection>

        <IconButton
          icon="delete"
          iconColor={theme.colors.delete}
          size={22}
          onPress={() => removeFromWatchlist(movie.id)}
        />
      </St.Row>
    );
  };

  return (
    <St.Screen>
      <Appbar.Header>
        <Appbar.BackAction
          color={theme.colors.text}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title="Watchlist"
          titleStyle={{ color: theme.colors.text }}
        />
      </Appbar.Header>

      {watchlist.length === 0 ? (
        <St.EmptyWrapper>
          <St.EmptyImage source={require('../../assets/logo.png')} />
          <St.EmptyText>Your watchlist is empty.</St.EmptyText>
        </St.EmptyWrapper>
      ) : (
        <FlatList
          data={watchlist}
          keyExtractor={item => String(item.id)}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 12 }}
          ItemSeparatorComponent={() => <St.Separator />}
        />
      )}
    </St.Screen>
  );
}
