import React from 'react';

const DateButton = ({date, setDate}) => {
  const handleNextMonth = () => {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      1
      )

    setDate(newDate)
  }

  const handlePrevMonth = () => {
    const prevDate = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      1
    )

    setDate(prevDate)
  }

  return (
    <div>
      <button onClick={handlePrevMonth}>이전</button>
      <span>{date.getFullYear()}년 {date.getMonth() + 1}월</span>
      <button onClick={handleNextMonth}>다음</button>
    </div>
  );
};

export default DateButton;
