import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { colors } from 'theme/theme';

const LandingComponent = ({ text, navigateTarget }) => {
  const navigate = useNavigate();

  return (
    <LandingTodo onClick={() => navigate(navigateTarget)}>
      <Landingtitle>{text}</Landingtitle>
      <FontAwesomeIcon
        color={`${colors.red}`}
        size="2x"
        icon={faCircleArrowRight}
      />
    </LandingTodo>
  );
};

export default LandingComponent;

const LandingTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 95%;
  height: 120px;
  margin: 20px auto;
  border: 1px solid ${colors.orange};
  border-radius: 8px;
  cursor: pointer;
`;

const Landingtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;
