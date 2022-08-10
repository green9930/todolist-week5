import styled, { css } from 'styled-components';
import { faTrash, faHouse, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ children, size, variant, type, clickHandler }) => {

  return (
    <StButton size={size} variant={variant} type={type} onClick={clickHandler}>
      {children}
      {variant === 'delete' ? (
        <FontAwesomeIcon icon={faTrash} size="1x" />
      ) : null}
      {variant === 'home' ? <FontAwesomeIcon icon={faHouse} size="2x" /> : null}
      {variant === 'revise' ? (
        <FontAwesomeIcon icon={faPencil} size="1x" />
      ) : null}
    </StButton>
  );
};

Button.defaultProps = {
  children: '',
  size: '',
  variant: '',
  type: 'button',
  clickHandler: null,
};

export default Button;

const StButton = styled.button`
  cursor: pointer;

  ${(props) => {
    return (
      props.size === 'large' &&
      css`
        font-size: 0.875rem;
        padding: 5px 12px;
        border: 1px solid rgb(238, 238, 238);
        background-color: rgb(255, 255, 255);
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
        border: 1px solid rgb(238, 238, 238);
        background-color: rgb(255, 255, 255);
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
        color: white;
        background-color: rgb(203 229 172);
        border: 1px solid rgb(203 229 172);
        border-radius: 3px;
        height:28px;
        width:28px;
        padding:4px;
        font-size:16px;
      `
    );
  }}

${(props) => {
    return (
      props.variant === 'home' &&
      css`
        background-color: white;
        border: none;
        color: rgb(65 108 13);
      `
    );
  }}

${(props) => {
    return (
      props.variant === 'revise' &&
      css`
        color: white;
        background-color: rgb(203 229 172);
        border: 1px solid rgb(203 229 172);
        border-radius: 3px;
        height:28px;
        width:28px;
        padding:4px;
        font-size:16px;
      `
    );
  }}
`;
