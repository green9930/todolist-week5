import styled from 'styled-components';
import { a11yHidden } from 'styles/mixin';

const TodoTextarea = ({ todoLabel, defaultValue, isHide, changeHandler }) => {
  return (
    <TodoTextareaContainer>
      <label htmlFor="todo-textarea" className={isHide ? 'a11y-hidden' : ''}>
        {todoLabel}
      </label>
      <StyledTextarea
        id="todo-textarea"
        name="content"
        rows="10"
        cols="50"
        placeholder="내용을 입력해주세요. (2~200자)"
        defaultValue={defaultValue}
        onChange={changeHandler}
      ></StyledTextarea>
    </TodoTextareaContainer>
  );
};

TodoTextarea.defaultProps = {
  todoLabel: '내용',
  defaultValue: '',
  isHide: false,
  changeHandler: null,
};

export default TodoTextarea;

const TodoTextareaContainer = styled.div`
  .a11y-hidden {
    ${a11yHidden}
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #eeeeee;
  padding: 12px;
  font-family: 'Noto Sans KR', sans-serif;

  ::placeholder {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
