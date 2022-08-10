import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/elements/Button';
import { colors } from 'theme/theme';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Button variant="home" clickHandler={() => navigate('/')} />
      <h1>모두의 투두리스트</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  margin-bottom: 20px;
  padding: 30px 20px;
  border-bottom: 1px solid ${colors.lightGray};
`;

export default Header;
