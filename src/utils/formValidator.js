const alertMessages = {
  name: '⚠️ 작성자 이름을 입력해주세요🥺 (5자 이내)',
  title: '⚠️ 오늘 할 일의 제목을 입력해주세요🥺 (30자 이내)',
  content: '⚠️ 오늘 할 일의 내용을 입력해주세요🥺 (200자 이내)',
  comment: '⚠️ 댓글을 입력해주세요🥺 (30자 이내)',
};

const formValidator = (targetName, targetText) => {
  const result =
    targetText.trim() === ''
      ? { message: alertMessages[targetName], verify: false }
      : { message: '', verify: true };

  return result;
};

export default formValidator;
