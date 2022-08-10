import styled, { css } from 'styled-components';
import { faTrash, faHouse, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from 'theme/theme';
import { a11yHidden } from 'styles/mixin';

const Button = ({ children, size, variant, type, clickHandler, isVisible }) => {
  return (
    <StButton size={size} variant={variant} type={type} onClick={clickHandler}>
      <span className={isVisible ? '' : 'a11y-hidden'}>{children}</span>
      {variant === 'delete' && <FontAwesomeIcon icon={faTrash} size="1x" />}
      {variant === 'home' && <FontAwesomeIcon icon={faHouse} size="2x" />}
      {variant === 'revise' && <FontAwesomeIcon icon={faPencil} size="1x" />}
    </StButton>
  );
};

Button.defaultProps = {
  children: '',
  size: '',
  variant: '',
  type: 'button',
  clickHandler: null,
  isVisible: true,
};

export default Button;

const StButton = styled.button`
  .a11y-hidden {
    ${a11yHidden}
  }

  ${(props) => {
    return (
      props.size === 'large' &&
      css`
        font-size: 0.875rem;
        padding: 5px 12px;
        border: 1px solid ${colors.lightGray};
        background-color: ${colors.white};
        height: 46px;
        border-radius: 8px;
        width: 100%;
      `
    );
  }}

  ${(props) => {
    return (
      props.size === 'small' &&
      css`
        font-size: 0.875rem;
        border: 1px solid ${colors.lightGray};
        background-color: ${colors.white};
        height: 46px;
        border-radius: 8px;
        width: 120px;
      `
    );
  }}

${(props) => {
    return (
      props.variant === 'delete' &&
      css`
        color: ${colors.white};
        background-color: ${colors.lightGreen};
        border: 1px solid ${colors.lightGreen};
        border-radius: 3px;
        padding: 3px 8px;
        font-size: 16px;
      `
    );
  }}

${(props) => {
    return (
      props.variant === 'home' &&
      css`
        background-color: ${colors.white};
        border: none;
        color: ${colors.darkGreen};
      `
    );
  }}

${(props) => {
    return (
      props.variant === 'revise' &&
      css`
        color: ${colors.white};
        background-color: ${colors.lightGreen};
        border: 1px solid ${colors.lightGreen};
        border-radius: 3px;
        padding: 3px 7px;
        font-size: 16px;
      `
    );
  }}

${(props) => {
    return (
      props.variant === 'normal' &&
      css`
        color: ${colors.white};
        background-color: ${colors.lightGreen};
        border: 1px solid ${colors.lightGreen};
        border-radius: 3px;
        padding: 3px 8px;
        font-size: 16px;
        text-align: center;
      `
    );
  }}
`;
