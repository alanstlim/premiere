import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PosterWrapper = styled.View`
  margin-top: 40px;
  border-radius: 16px;
  align-self: center;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  padding: 20px;
  margin-top: 20px;
`;

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 6px;
  line-height: 20px;
`;
