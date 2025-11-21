import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const EmptyWrapper = styled.View`
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const EmptyImage = styled.Image`
  width: 120px;
  height: 120px;
  opacity: 0.4;
  margin-bottom: 16px;
`;

export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  margin-top: 8px;
  text-align: center;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
`;

export const PosterWrapper = styled.View`
  width: 80px;
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const Poster = styled.Image`
  width: 100%;
  height: 100%;
`;

export const InfoSection = styled.View`
  flex: 1;
  margin-left: 14px;
`;

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 600;
`;

export const SubText = styled.Text`
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 4px;
  font-size: 14px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.muted};
  margin-left: 16px;
`;
