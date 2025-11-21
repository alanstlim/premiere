import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 36px 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Section = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const ErrorImage = styled.Image`
  width: 180px;
  height: 180px;
  margin-bottom: 24px;
  opacity: 0.7;
`;

export const ErrorMessage = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
  margin-bottom: 16px;
`;

export const RetryButton = styled.TouchableOpacity`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: 10px;
`;

export const RetryText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
