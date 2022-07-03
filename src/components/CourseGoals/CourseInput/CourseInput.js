import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    } // 값을 입력하기 시작하면, 잘못된 입력임을 알려주던 스타일을 다시 없애기 위함
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } // 사용자가 유효한 값 입력했는지 확인, 0일시 함수 종료되어 아래 코드 실행 안 되도록(=목록 추가 X)
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input type="text" style={{ borderColor: !isValid ? 'red' : '#ccc', backgroundColor: !isValid ? '#FFECEC' : 'transparent' }} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
