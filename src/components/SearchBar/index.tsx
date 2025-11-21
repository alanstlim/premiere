import * as St from './styles';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar = (props: Props) => {
  return (
    <St.StyledSearchBar
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export default SearchBar;
