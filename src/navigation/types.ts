import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Movie } from '../services/movies';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Tabs: undefined;
  Detail: { movie: Movie };
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Watchlist: undefined;
};

export type DetailScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

export type TabsScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'Tabs'
>;

export type DetailScreenRoute = RouteProp<RootStackParamList, 'Detail'>;
