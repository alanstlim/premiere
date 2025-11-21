import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie } from '../services/movies';

type WatchlistStore = {
  watchlist: Movie[];
  cachedMovies: Movie[];
  setCachedMovies: (movies: Movie[]) => void;

  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
};

export const useWatchlist = create(
  persist<WatchlistStore>(
    (set, get) => ({
      watchlist: [],
      cachedMovies: [],

      setCachedMovies: movies =>
        set({
          cachedMovies: movies,
        }),

      addToWatchlist: movie =>
        set({
          watchlist: [...get().watchlist, movie],
        }),

      removeFromWatchlist: id =>
        set({
          watchlist: get().watchlist.filter(m => m.id !== id),
        }),

      isInWatchlist: id => get().watchlist.some(m => m.id === id),
    }),

    {
      name: 'watchlist-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
