import styled from 'styled-components';
import { colors } from 'theme/theme';

const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <span>{error}</span>
    </ErrorContainer>
  );
};

export default ErrorMessage;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;

  span {
    font-size: 24px;
    font-weight: 500;
    color: ${colors.red};
  }
`;
