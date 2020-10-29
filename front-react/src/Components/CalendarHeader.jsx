import React, { useState } from 'react'

const CalendarHeader = (props) => {
  const [id, setId] = useState(id: 0);
  const [date, setDate] = useState(date: new Date);
  const [isHoliday, judgeHoliday] = useState(isHoliday: false);
  const [isNotDisplayMonth, judgeNotDisplayMonth] = useState(isNotDisplayMonth: false);
  const [isSaturday, judgeSaturday] = useState(isSaturday: false);
  const [isSunday, judgeSunday] = useState(isSunday: false);
  // const [isSelected, judgeSelected] = useState(false);
  const [isToday, judgeToday] = useState(isToday: false);


  return(
    <div className='weekday'>
      <div>月</div>
      <div>火</div>
      <div>水</div>
      <div>木</div>
      <div>金</div>
      <div>土</div>
      <div>日</div>
    </div>
  )
}

export default CalendarHeader;